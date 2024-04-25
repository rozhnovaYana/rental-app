import { Location } from "@/types/location";
import { fetchData } from "./https";

const MAIN_URL = "https://eu1.locationiq.com/v1";

export const getGeocode = async (location: Location) => {
  const { street, state, city, zipcode } = location;
  const encodedString = encodeURI(`${street} ${city} ${state} ${zipcode}`);
  const response = await fetchData(
    `${MAIN_URL}/search?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&format=json&q=${encodedString}`
  );

  return {
    lat: response?.[0]?.lat,
    lng: response?.[0]?.lon,
  };
};
