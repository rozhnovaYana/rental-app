"use client";
import React, { useState } from "react";
import { Checkbox, CheckboxGroup, Textarea } from "@nextui-org/react";

import {
  amentities,
  locationFields,
  ratesFields,
  rentalProperties,
  rentalTypes,
  sellerInfoFields,
} from "@/utils/propertyFormData";

import InputWrapper from "@/components/add-property/InputWrapper";
import Input from "@/components/UI/Input";
import Selector from "@/components/UI/Selector";
import SubmitButton from "@/components/UI/SubmitButton";

import { CreatePropertyState, Property } from "@/types/property";
import ImagePicker from "../add-property/ImagePicker";
import { useFormState } from "react-dom";

interface IPropertyForm {
  property?: Property;
  action: (
    { images, id }: { images: string[]; id?: string },
    state: CreatePropertyState,
    formData: FormData
  ) => Promise<CreatePropertyState>;
}

const getErrors = (arr: string[] | undefined) =>
  arr &&
  arr.reduce((acc: { [x: string]: string }, i) => {
    const key = i.match(/^(\S+)/i)?.[0]?.toLowerCase();
    if (key) {
      acc[key] = i;
    }
    return acc;
  }, {});

const PropertyForm = ({ property, action }: IPropertyForm) => {
  const initialImages = property?.images || [];
  const [images, setImages] = useState<string[]>([...initialImages]);

  const [{ errors }, formAction] = useFormState(
    action.bind(null, { images, id: property?._id }),
    {
      errors: {},
    }
  );

  // formatted errors
  const locationErrors = getErrors(errors?.location);
  const sellerInfo = getErrors(errors?.seller_info);

  return (
    <form action={formAction}>
      <h2 className="text-3xl text-center font-semibold mb-6 text-white">
        Add Property
      </h2>

      <InputWrapper>
        <Selector
          defaultSelectedKeys={property?.type && [property?.type]}
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
          defaultValue={property?.name}
        />
      </InputWrapper>
      <InputWrapper>
        <Textarea
          label="Description"
          variant="bordered"
          id="description"
          name="description"
          classNames={{
            label: "text-white font-bold mb-2 block",
            input: "text-white",
          }}
          rows={4}
          isInvalid={!!errors?.description}
          errorMessage={errors?.description?.join(", ")}
          defaultValue={property?.description}
        />
      </InputWrapper>
      <div className="mt-8 bg-main p-4">
        <label className="block text-white font-bold mb-2">Location</label>

        {locationFields.map((i, key) => (
          <Input
            isInvalid={!!locationErrors?.[i]}
            errorMessage={locationErrors?.[i]}
            key={key}
            id={i}
            name={`location.${i}`}
            placeholder={i}
            defaultValue={property?.location?.[i]}
          />
        ))}
      </div>
      <div className="my-4 flex flex-wrap">
        {rentalProperties.map((i, key) => {
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
                defaultValue={`${property?.[i]}`}
              />
            </div>
          );
        })}
      </div>
      <div className="mb-4">
        <CheckboxGroup
          classNames={{ wrapper: "grid grid-cols-2", label: "text-white" }}
          label="Amenities"
          defaultValue={property?.amenities}
          color="secondary"
        >
          {amentities.map(({ id, label }, i) => (
            <Checkbox
              key={i}
              type="checkbox"
              id={id}
              name="amenities"
              value={label}
              className="mr-2 text-white"
            >
              {label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>
      <div className="mb-4 bg-main p-4">
        <label className="block text-white font-bold mb-2">
          Rates (Leave blank if not applicable)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {ratesFields.map((i, key) => (
            <div className="flex items-center" key={key}>
              <Input
                type="number"
                label={i}
                id={`${i}_rate`}
                name={`rates.${i}`}
                defaultValue={`${property?.rates?.[i]}`}
              />
            </div>
          ))}
        </div>
      </div>
      {sellerInfoFields.map((i) => (
        <InputWrapper key={i}>
          <Input
            isInvalid={!!sellerInfo?.[i]}
            errorMessage={sellerInfo?.[i]}
            type={i === "name" ? "text" : i === "email" ? "email" : "phone"}
            id={`seller_${i}`}
            name={`seller_info.${i}`}
            label={i}
            defaultValue={property?.seller_info?.[i]}
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

export default PropertyForm;
