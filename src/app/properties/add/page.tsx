import AddPropertyForm from "@/components/add-property/AddPropertyForm";
import React from "react";

type Props = {};

const AddPropertiesPage = (props: Props) => {
  return (
    <section className="bg-main">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-background px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <AddPropertyForm />
        </div>
      </div>
    </section>
  );
};

export default AddPropertiesPage;
