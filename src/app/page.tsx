import React from "react";

import Hero from "@/components/hero/Hero";
import InfoBoxes from "@/components/info-box/InfoBoxes";
import RecentlyProperties from "@/components/properties/RecentlyProperties";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <RecentlyProperties />
    </>
  );
};

export default HomePage;
