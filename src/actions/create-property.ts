"use server";

import { CreatePropertyState } from "@/types/property";
import { PropertySchema } from "./schema";

const createProperty = async (
  customFormData: string[],
  state: CreatePropertyState,
  formData: FormData
): Promise<CreatePropertyState> => {
  console.log(customFormData);
  // const convertToNumber = (field: FormDataEntryValue | null) => field && +field;
  // const property = {
  //   name: formData.get("name"),
  //   type: formData.get("type"),
  //   description: formData.get("description"),
  //   location: {
  //     street: formData.get("location.street"),
  //     city: formData.get("location.city"),
  //     state: formData.get("location.state"),
  //     zipcode: formData.get("location.zipcode"),
  //   },
  //   beds: convertToNumber(formData.get("beds")),
  //   baths: convertToNumber(formData.get("baths")),
  //   square_feet: convertToNumber(formData.get("baths")),
  //   amenities: formData.get("amenities"),
  //   rates: {
  //     nightly: convertToNumber(formData.get("rates.nightly")),
  //     weekly: convertToNumber(formData.get("rates.weekly")),
  //     monthly: convertToNumber(formData.get("rates.monthly")),
  //   },
  //   seller_info: {
  //     name: formData.get("seller_info.name"),
  //     email: formData.get("seller_info.email"),
  //     phone: formData.get("seller_info.phone"),
  //   },
  //   images: [],
  // };

  // const { success } = PropertySchema.safeParse(property);

  return {};
};
export default createProperty;
