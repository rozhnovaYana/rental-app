"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { Textarea } from "@nextui-org/react";

import {
  amentities,
  rentalTypes,
} from "@/components/add-property/AddPropertyFormData";
import ImagePicker from "@/components/add-property/ImagePicker";
import InputWrapper from "@/components/add-property/InputWrapper";

import Input from "@/components/UI/Input";
import Selector from "@/components/UI/Selector";
import SubmitButton from "@/components/UI/SubmitButton";

import createProperty from "@/actions/create-property";

const getErrors = (arr: string[] | undefined) =>
  arr &&
  arr.reduce((acc: { [x: string]: string }, i) => {
    const key = i.match(/^(\S+)/i)?.[0]?.toLowerCase();
    if (key) {
      acc[key] = i;
    }
    return acc;
  }, {});

const AddPropertyForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [{ errors }, formAction] = useFormState(
    createProperty.bind(null, images),
    {
      errors: {},
    }
  );

  // formatted errors
  const locationErrors = getErrors(errors?.location);
  const sellerInfo = getErrors(errors?.seller_info);

  return (
    <form action={formAction}>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Property</h2>
      <InputWrapper>
        <Selector
          id="type"
          label="Property Type"
          arr={rentalTypes}
          isInvalid={!!errors?.type}
          errorMessage={errors?.type?.join(", ")}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          id="name"
          label="Listing Name"
          name="name"
          isInvalid={!!errors?.name}
          errorMessage={errors?.name?.join(", ")}
        />
      </InputWrapper>
      <InputWrapper>
        <Textarea
          label="Description"
          variant="bordered"
          id="description"
          name="description"
          classNames={{
            label: "text-gray-700 font-bold mb-2 block",
          }}
          rows={4}
          isInvalid={!!errors?.description}
          errorMessage={errors?.description?.join(", ")}
        />
      </InputWrapper>

      <div className="mt-8 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>

        {["street", "city", "state", "zipcode"].map((i: string, key) => (
          <Input
            isInvalid={!!locationErrors?.[i]}
            errorMessage={locationErrors?.[i]}
            key={key}
            id={i}
            name={`location.${i}`}
            placeholder={i}
          />
        ))}
      </div>

      <div className="my-4 flex flex-wrap">
        {["beds", "baths", "square_feet"].map((i, key) => {
          const error = (errors as { [x: string]: string[] })?.[i];
          return (
            <div key={key} className="w-full sm:w-1/3 pr-2">
              <Input
                id={i}
                name={i}
                type="number"
                label={i.replace(/\_/g, " ")}
                isInvalid={!!error}
                errorMessage={error?.join(", ")}
              />
            </div>
          );
        })}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {amentities.map(({ id, label }, i) => (
            <div key={i}>
              <input
                type="checkbox"
                id={id}
                name="amenities"
                value={label}
                className="mr-2"
              />
              <label htmlFor={id}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">
          Rates (Leave blank if not applicable)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {["weekly", "monthly", "nightly"].map((i, key) => (
            <div className="flex items-center" key={key}>
              <Input
                type="number"
                label={i}
                id={`${i}_rate`}
                name={`rates.${i}`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* seller_info */}
      {["name", "email", "phone"].map((i) => (
        <InputWrapper key={i}>
          <Input
            isInvalid={!!sellerInfo?.[i]}
            errorMessage={sellerInfo?.[i]}
            type={i === "name" ? "text" : i === "email" ? "email" : "phone"}
            id={`seller_${i}`}
            name={`seller_info.${i}`}
            label={i}
          />
        </InputWrapper>
      ))}

      <ImagePicker
        images={images}
        setImages={setImages}
        error={errors?.images?.join(", ")}
      />
      {errors?._form && <div>{errors._form}</div>}
      <div>
        <SubmitButton>Add Property</SubmitButton>
      </div>
    </form>
  );
};

export default AddPropertyForm;
