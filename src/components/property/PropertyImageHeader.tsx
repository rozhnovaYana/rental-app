import Image from "next/image";
import React from "react";

const PropertyImageHeader = ({ url }: { url: string }) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${url}`}
            alt=""
            className="object-cover h-[400px] w-full"
            width="1800"
            height="500"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyImageHeader;
