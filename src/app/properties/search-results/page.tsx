import React from "react";
import PropertiesGrid from "@/components/UI/PropertiesGrid";
import { fetchData } from "@/utils/https";
import SearchForm from "@/components/search/SearchForm";

const PropertiesSearchPage = async ({
  searchParams,
}: {
  searchParams: { type: string; location: string };
}) => {
  const { properties } = await fetchData(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/search?type=${searchParams.type}&location=${searchParams.location}`
  );

  return (
    <>
      <SearchForm />
      <PropertiesGrid properties={properties} />
    </>
  );
};

export default PropertiesSearchPage;
