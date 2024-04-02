"use client";
import React, { useState } from "react";
import {
  amentities,
  rentalTypes,
} from "@/components/add-property/AddPropertyFormData";
import Input from "./Input";
import createProperty from "@/actions/create-property";
import ImagePicker from "./ImagePicker";
import { useFormState } from "react-dom";
const initialState = {
  errors: {},
};
const AddPropertyForm = () => {
  const [images, setImages] = useState<string[]>([]);

  const [state, formAction] = useFormState(
    createProperty.bind(null, images),
    initialState
  );

  return (
    <form action={formAction}>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Property</h2>
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          Property Type
        </label>
        <select
          id="type"
          name="type"
          className="border rounded w-full py-2 px-3"
          required
        >
          {rentalTypes.map((t, index) => (
            <option key={index} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Listing Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="eg. Beautiful Apartment In Miami"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          defaultValue="description"
          id="description"
          name="description"
          className="border rounded w-full py-2 px-3"
          rows={4}
          placeholder="Add an optional description of your property"
        ></textarea>
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <Input id="street" name="location.street" placeholder="Street" />
        <Input id="city" name="location.city" placeholder="City" required />
        <Input id="state" name="location.state" placeholder="State" required />
        <Input id="zipcode" name="location.zipcode" placeholder="Zipcode" />
      </div>

      <div className="mb-4 flex flex-wrap">
        {["beds", "baths", "square_feet"].map((i, key) => (
          <div key={key} className="w-full sm:w-1/3 pr-2">
            <label htmlFor={i} className="block text-gray-700 font-bold mb-2">
              {i.replace(/\_/g, " ")}
            </label>
            <Input type="number" id={i} name={i} required />
          </div>
        ))}
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
              <label htmlFor="monthly_rate" className="mr-2">
                {i}
              </label>
              <Input type="number" id={`${i}_rate`} name={`rates.${i}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Name
        </label>
        <Input
          type="text"
          id="seller_name"
          name="seller_info.name."
          placeholder="Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_email"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Email
        </label>
        <Input
          type="email"
          id="seller_email"
          name="seller_info.email"
          placeholder="Email address"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_phone"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Phone
        </label>
        <Input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          placeholder="Phone"
        />
      </div>

      <ImagePicker images={images} setImages={setImages} />

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Property
        </button>
      </div>
    </form>
  );
};

export default AddPropertyForm;
