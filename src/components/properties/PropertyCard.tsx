import React from "react";
import Image from "next/image";
import {
  FaBath,
  FaBed,
  FaMoneyBill,
  FaMapMarker,
  FaRulerCombined,
} from "react-icons/fa";
import { type Property } from "@/types/property";
import img from "@/assets/images/no-properties.jpg";
import LinkButton from "@/components/UI/LinkButton";

const PropertyCard = ({
  _id,
  name,
  type,
  location: { city, state },
  beds,
  baths,
  square_feet,
  rates,
  images,
}: Property) => {
  const { monthly, weekly, nightly } = rates;
  const rate = monthly
    ? `${monthly.toLocaleString()}/mo`
    : weekly
    ? `${weekly.toLocaleString()}/wk`
    : nightly
    ? `${nightly.toLocaleString()}/ng`
    : "";

  return (
    <div className="rounded-xl shadow-md relative bg-main">
      <Image
        src={images[0] || img}
        alt={name}
        className="w-full h-52 rounded-t-xl"
        width={300}
        height={300}
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-400">{type}</div>
          <h3 className="text-xl font-bold text-title">{name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-main px-4 py-2 rounded-lg text-white font-bold text-right md:text-center lg:text-right">
          ${rate}
        </h3>

        <div className="flex justify-center gap-4 text-gray-100 mb-4">
          <p>
            <FaBed className="inline-block mr-1 mb-1 text-gray-300" /> {beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline-block mr-1 mb-1 text-gray-300" /> {baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-1 mb-1 text-gray-300" />
            {square_feet} <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green text-sm mb-4">
          {Object.keys(rates).map((rate) => (
            <p key={rate} className="capitalize">
              <FaMoneyBill className="inline-block mr-2 text-gray-300" />
              {rate}
            </p>
          ))}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="inline-block mr-1 mt-1 text-orange-200" />{" "}
            <span className="text-orange-400">
              {city} {state}
            </span>
          </div>
          <LinkButton href={`/properties/${_id}`}>Details</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
