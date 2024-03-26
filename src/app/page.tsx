import Hero from "@/components/hero/Hero";
import InfoBoxes from "@/components/info-box/InfoBoxes";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
};

export default HomePage;
