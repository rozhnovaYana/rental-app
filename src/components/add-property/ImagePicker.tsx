"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const ImagePicker = ({
  images,
  setImages,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const onInputClick = () => ref?.current?.click();

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (
          event.target &&
          event.target.result &&
          typeof event.target.result === "string"
        ) {
          newImages.push(event.target.result);
          if (i === files.length - 1) {
            setImages((prevImages) => [...prevImages, ...newImages]);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="mb-4">
      <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
        Images
      </label>
      <div className="flex gap-3 flex-wrap">
        {images &&
          images.map((file, key) => (
            <div className="relative h-40 w-40" key={key}>
              <Image
                fill
                objectFit="cover"
                src={file}
                alt="The image selected by the user."
              />
              <FaTimes
                className="absolute top-2 right-2 bg-gray-100 p-1 flex items-center justify-center rounded-full w-6 h-6 cursor-pointer"
                onClick={() => handleRemoveImage(key)}
              />
            </div>
          ))}
        <div
          onClick={onInputClick}
          className="flex relative h-40 w-40 bg-slate-200 justify-center items-center rounded-lg opacity-85 cursor-pointer"
        >
          <p>
            {images && Array.from(images).length > 0
              ? "Add one more Image"
              : "Images not found"}
          </p>
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
