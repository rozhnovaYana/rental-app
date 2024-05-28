import React from "react";
import { headers } from "next/headers";
import PropertiesGrid from "@/components/UI/PropertiesGrid";
import { fetchData } from "@/utils/https";

const SavedPropertiesPage = async () => {
  const { properties } = await fetchData(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/bookmark`,
    { headers: headers() }
  );

  return <PropertiesGrid properties={properties} />;
};

export default SavedPropertiesPage;
