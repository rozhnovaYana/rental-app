import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

type BookmarkButton = {
  propertyId: string;
};

const BookmarkButton = ({ propertyId }: BookmarkButton) => {
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_DOMAIN}/bookmark/check`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              propertyId,
            }),
          }
        );
        const { isBooked } = await res.json();
        setIsBooked(isBooked);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [propertyId]);

  const onMarkHamdler = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/bookmark`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            propertyId,
          }),
        }
      );
      const { message, isBooked, isSucces } = await res.json();
      setIsBooked(isBooked);
      isSucces ? toast.success(message) : toast.error(message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  if (isLoading) <p>Loading...</p>;
  return (
    <Button
      onClick={onMarkHamdler}
      className={`${
        isBooked
          ? "bg-red-400 hover:bg-red-500"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center`}
    >
      <FaBookmark className="fas fa-bookmark mr-2"></FaBookmark> Bookmark
      Property
    </Button>
  );
};

export default BookmarkButton;
