"use client";
import React, { FormEvent, useState } from "react";
import SubmitButton from "@/components/UI/SubmitButton";
import Selector from "@/components/UI/Selector";
import Input from "@/components/UI/Input";
import { useRouter } from "next/navigation";

const options = [
  "all",
  "apartment",
  "studio",
  "condo",
  "house",
  "cabin or cottage",
  "loft",
  "room",
  "other",
];

const SearchForm = () => {
  const [formState, setState] = useState({
    location: "",
    type: "",
  });
  const router = useRouter();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (formState.location === "all" && formState.type === "") {
      router.push("/properties");
      return;
    }
    router.push(
      `/properties/search-results?type=${formState.type}&location=${formState.location}`
    );
  };

  return (
    <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-3/5 md:pr-2">
        <Input
          onChange={(e) => {
            setState((prev) => ({ ...prev, location: e.target.value }));
          }}
          label="Location"
          labelPlacement="inside"
          name="location"
          type="text"
          id="location"
          placeholder="Enter Location (City, State, Zip, etc"
          className="w-full rounded-lg  text-gray-800 focus:outline-none focus:ring"
        />
      </div>
      <div className="w-full md:w-2/5 md:pl-2">
        <Selector
          onChange={(e) => {
            setState((prev) => ({ ...prev, type: e.target.value }));
          }}
          id="property-type"
          label="Property Type"
          arr={options}
          labelPlacement="inside"
        />
      </div>
      <SubmitButton
        onClick={onSubmitHandler}
        type="submit"
        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Search
      </SubmitButton>
    </form>
  );
};

export default SearchForm;
