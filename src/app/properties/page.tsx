import React from "react";

import PropertiesGrid from "@/components/UI/PropertiesGrid";
import { fetchData } from "@/utils/https";

import { Property } from "@/types/property";

const PropertiesPage = async () => {
  const properties: Property[] =
    (await fetchData(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`)) || [];

  return <PropertiesGrid properties={properties} />;
};

export default PropertiesPage;
