import React from "react";
import PropertiesGrid from "@/components/UI/PropertiesGrid";
import { fetchData } from "@/utils/https";

const SavedPropertiesPage = async () => {
  const { properties } = await fetchData(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/bookmark`,
    { cache: "no-store" }
  );

  return <PropertiesGrid properties={properties} />;
};

export default SavedPropertiesPage;
