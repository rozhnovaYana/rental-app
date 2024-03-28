import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBath,
  FaBed,
  FaMoneyBill,
  FaMapMarker,
  FaRulerCombined,
} from "react-icons/fa";
import { type Property } from "@/types/property";

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
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${images[0]}`}
        alt={name}
        className="w-full h-auto rounded-t-xl"
        width={300}
        height={300}
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${rate}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline-block mr-1 mb-1 text-black" /> {beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline-block mr-1 mb-1 text-black" /> {baths}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-1 mb-1 text-black" />
            {square_feet} <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {Object.keys(rates).map((rate) => (
            <p key={rate} className="capitalize">
              <FaMoneyBill className="inline-block mr-2 text-black" />
              {rate}
            </p>
          ))}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="inline-block mr-1 mt-1 text-orange-400" />{" "}
            <span className="text-orange-700">
              {city} {state}
            </span>
          </div>
          <Link
            href={`/properties/${_id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
