import React from "react";
import PropertyCard from "@/components/properties/PropertyCard";
import { Property } from "@/types/property";
import img from "@/assets/images/no-properties.jpg";
import Image from "next/image";
import SpinnerUI from "@/components/UI/Spinner";

const PropertiesGrid = ({ properties }: { properties: Property[] }) => {
  if (!properties) return <SpinnerUI />;
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} {...property} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-center font-semibold text-gray-700 text-large mb-8">
              No properties found
            </h2>
            <Image alt="No properties" src={img} width={400} height={400} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesGrid;
