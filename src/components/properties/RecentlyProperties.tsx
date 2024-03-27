import React from "react";
import data from "@/properties.json";
import Link from "next/link";
import PropertyCard from "./PropertyCard";
type Props = {};

const RecentlyProperties = (props: Props) => {
  const properties = data.sort(() => Math.random() - Math.random()).slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
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
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties{" "}
        </Link>
      </section>
    </>
  );
};

export default RecentlyProperties;
