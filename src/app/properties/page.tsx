import React from "react";
import { fetchData } from "@/utils/https";
import { Property } from "@/types/property";
import PropertiesGrid from "@/components/UI/PropertiesGrid";

const PropertiesPage = async () => {
  const properties: Property[] =
    (await fetchData(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`)) || [];

  return <PropertiesGrid properties={properties} />;
};

export default PropertiesPage;
