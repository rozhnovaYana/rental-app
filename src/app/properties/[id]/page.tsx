"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";

import PropertyImageHeader from "@/components/property/PropertyImageHeader";
import PropertyInfo from "@/components/property/PropertyInfo";

import { fetchData } from "@/utils/https";

import { Property } from "@/types/property";

const PropertyPage = () => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const data = await fetchData(
            `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`
          );
          setProperty(data);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    })();
  }, [id]);
  // will be update in the future
  if (loading) {
    return <h1> Loading</h1>;
  }
  // will be update in the future
  if (!property) {
    return <h1>Property is not found</h1>;
  }
  return (
    <>
      <PropertyImageHeader url={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaBackward className="fas fa-arrow-left mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <PropertyInfo />
    </>
  );
};

export default PropertyPage;
