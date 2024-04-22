"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { toast } from "react-toastify";

import { fetchData } from "@/utils/https";

import profileImage from "@/assets/images/profile.png";
import SubmitButton from "@/components/UI/SubmitButton";
import ProfileSkeleton from "@/components/profile/Skeleton";

import { Property } from "@/types/property";
import noPropertiesImage from "@/assets/images/no-properties.jpg";

const Profile = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const { data: session } = useSession();
  const user = session?.user;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    (async () => {
      if (user?.id) {
        const data = await fetchData(
          `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/user/${user?.id}`
        );
        setProperties(data);
      }
    })();
  }, [user]);

  const onDeleteProp = async (propId: string) => {
    try {
      await fetchData(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${propId}`,
        "DELETE"
      );
      setProperties((prevState) => prevState.filter((i) => i?._id !== propId));
      toast.success("The property was deleted");
    } catch (err) {
      toast.error("Something went wrong. Please, try again letter.");
    }
  };
  if (!user) {
    return <ProfileSkeleton />;
  }
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={user?.image || profileImage}
                  alt="User"
                  width={400}
                  height={400}
                />
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span> {user?.name}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span> {user?.email}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4 flex flex-col">
              <h2 className="text-xl font-semibold mb-4">
                {properties.length > 0 ? "Your listings" : "No properties yet"}
              </h2>
              {properties.length === 0 && (
                <div className="flex justify-center items-center flex-1">
                  <Image
                    className="h-full w-full rounded-md object-cover block"
                    src={noPropertiesImage}
                    alt="Property 1"
                    width={200}
                    height={400}
                  />
                </div>
              )}
              {properties.map(({ _id, images, name, location: { street } }) => {
                return (
                  <div className="mb-10" key={_id}>
                    <Link href={`/properties/${_id}`}>
                      <Image
                        className="h-40 w-full rounded-md object-cover"
                        src={images[0]}
                        alt="Property 1"
                        objectFit="cover"
                        width={200}
                        height={400}
                      />
                    </Link>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">{name}</p>
                      <p className="text-gray-600">Address: {street}</p>
                    </div>
                    <div className="mt-2">
                      <Link
                        href="/add-property"
                        className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </Link>
                      <button
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                        onClick={onOpen}
                      >
                        Delete
                      </button>
                    </div>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">
                              Do you really want to delete the property?
                            </ModalHeader>
                            <ModalFooter>
                              <SubmitButton color="danger" onClick={onClose}>
                                Close
                              </SubmitButton>
                              <SubmitButton
                                color="primary"
                                onClick={() => {
                                  onClose();
                                  onDeleteProp(_id);
                                }}
                              >
                                Delete
                              </SubmitButton>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
