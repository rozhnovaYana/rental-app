import React from "react";
import PropertyCard from "@/components/properties/PropertyCard";
import { fetchData } from "@/utils/https";
import { Property } from "@/types/property";

const PropertiesPage = async () => {
  const properties: Property[] = await fetchData(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
  );
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
