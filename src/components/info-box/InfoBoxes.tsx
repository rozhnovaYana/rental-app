import React from "react";
import InfoBox from "@/components/info-box/InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            header="For Renters"
            buttonInfo={{
              link: "/properties.html",
              title: "Browse Properties",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            header="For Property Owners"
            buttonInfo={{
              link: "/add-property.html",
              title: "Add Property",
            }}
            stylesType='reverse'
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
