import Image from "next/image";
import React from "react";

type PropertyImagesProps = { images: string[] };

const PropertyImages = ({ images }: PropertyImagesProps) => {
  return (
    <div className="flex flex-wrap pb-24">
      {images.map((image, key) => {
        return (
          <div key={key} className="basis-1/2 relative flex-1 h-96">
            <Image
              layout="fill"
              objectFit="cover"
              priority={true}
              sizes="100vw"
              src={image}
              alt="Image of the Apartment"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PropertyImages;
