import React from "react";

import Hero from "@/components/hero/Hero";
import InfoBoxes from "@/components/info-box/InfoBoxes";
import RecentlyProperties from "@/components/properties/RecentlyProperties";

type Props = {};

const HomePage = (props: Props) => {
  console.log(process.env.MONGODB_URI);
  return (
    <>
      <Hero />
      <InfoBoxes />
      <RecentlyProperties />
    </>
  );
};

export default HomePage;
