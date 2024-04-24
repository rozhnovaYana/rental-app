"use client";
import React from "react";

import createProperty from "@/actions/create-property";
import PropertyForm from "../UI/PropertyForm";

const AddPropertyForm = () => {
  return <PropertyForm action={createProperty} />;
};

export default AddPropertyForm;
