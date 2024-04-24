"use client";
import React, { useEffect, useState } from "react";

import PropertyForm from "@/components/UI/PropertyForm";
import editProperty from "@/actions/edit-property";
import { fetchData } from "@/utils/https";
import SpinnerUI from "@/components/UI/Spinner";

const EditPropertyPage = ({ params }: { params: { id: string } }) => {
  const [property, setProperty] = useState();

  useEffect(() => {
    (async () => {
      const property = await fetchData(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${params.id}`
      );
      setProperty(property);
    })();
  }, [params.id]);

  if (!property) {
    return <SpinnerUI />;
  }
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <PropertyForm action={editProperty} property={property} />
        </div>
      </div>
    </section>
  );
};

export default EditPropertyPage;
