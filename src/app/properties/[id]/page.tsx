"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { fetchData } from "@/utils/https";

const PropertyPage = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      if (id) {
        try {
          setLoading(true);
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
  return <div>{JSON.stringify(property)}</div>;
};

export default PropertyPage;
