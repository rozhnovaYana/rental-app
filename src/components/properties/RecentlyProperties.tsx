import React from "react";
import PropertyCard from "./PropertyCard";
import { fetchData } from "@/utils/https";
import { Property } from "@/types/property";
import LinkButton from "@/components/UI/LinkButton";

const RecentlyProperties = async () => {
  const data: Property[] =
    (await fetchData(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`)) || [];
  const properties = data
    .sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-title mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((pr) => (
              <PropertyCard key={pr._id} {...pr} />
            ))}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <LinkButton
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-main"
        >
          View All Properties
        </LinkButton>
      </section>
    </>
  );
};

export default RecentlyProperties;
