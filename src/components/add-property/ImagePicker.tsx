"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const ImagePicker = ({
  images,
  setImages,
  error,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  error?: string;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const onInputClick = () => ref?.current?.click();

  const onImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result && typeof event.target.result === "string") {
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
    if (ref.current?.value) {
      ref.current.value = "";
    }

    setImages((prevState) => {
      const newImages = [...prevState];
      newImages.splice(index, 1);
      return newImages;
    });
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
                className="object-cover"
                fill
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
          <p
            className={`text-center ${
              !!error && images.length === 0 && "text-red-700"
            }`}
          >
            {images && images.length > 0
              ? "Add one more Image"
              : !!error
              ? "Please, add at least one image"
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
