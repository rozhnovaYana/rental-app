import PropertiesGrid from "@/components/UI/PropertiesGrid";
import { fetchData } from "@/utils/https";
import { Spinner } from "@nextui-org/react";
import React from "react";

type Props = {};

const SavedPropertiesPage = async (props: Props) => {
  const { data } = await fetchData(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/bookmark`
  );
  if (!data) return <Spinner />;

  return <PropertiesGrid properties={data} />;
};

export default SavedPropertiesPage;
