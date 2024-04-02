"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const ImagePicker = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);

  const onInputClick = () => {
    ref?.current?.click();
  };
  const onImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const filesArray = files && Array.from(files);
    const imagesArray = filesArray?.map((file) => URL.createObjectURL(file));
    imagesArray && setImages((prev) => [...prev, ...imagesArray]);
  };
  const removeImage = (i: string) => {
    const index = images.indexOf(i);
    const updatedImages = [...images];
    index !== -1 && updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  return (
    <div className="mb-4">
      <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
        Images
      </label>
      <div className="flex gap-3 flex-wrap">
        {images &&
          images.map((i, key) => (
            <div className="relative h-40 w-40" key={key}>
              <Image
                fill
                objectFit="cover"
                src={i}
                alt="The image selected by the user."
              />
              <FaTimes
                className="absolute top-2 right-2 bg-gray-100 p-1 flex items-center justify-center rounded-full w-6 h-6 cursor-pointer"
                onClick={() => removeImage(i)}
              />
            </div>
          ))}
        <div
          onClick={onInputClick}
          className="flex relative h-40 w-40 bg-slate-200 justify-center items-center rounded-lg opacity-85 cursor-pointer"
        >
          <p>{images.length > 0 ? "Add one more Image" : "Images not found"}</p>
        </div>

        <input
          type="file"
          id="images"
          name="images"
          className="border rounded w-full py-2 px-3"
          accept="image/*"
          multiple
          onChange={onImageUpload}
          hidden
          ref={ref}
        />
      </div>
    </div>
  );
};

export default ImagePicker;
