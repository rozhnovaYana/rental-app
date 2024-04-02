import {
  amentitiesList,
  rentalTypes,
} from "@/components/add-property/AddPropertyFormData";
import { z } from "zod";

export const PropertySchema = z.object({
  name: z.string().trim(),
  type: z.enum(rentalTypes),
  description: z.string().trim(),
  location: z.object({
    street: z.string().trim(),
    city: z.string().trim(),
    state: z.string().trim(),
    zipcode: z.string().trim(),
  }),
  beds: z.number(),
  baths: z.number(),
  square_feet: z.number(),
  amenities: z.enum(amentitiesList || []),
  rates: z.object({
    nightly: z.number(),
    weekly: z.number(),
    monthly: z.number(),
  }),
  seller_info: z.object({
    name: z.string().trim(),
    email: z.string().trim().email().endsWith(".com"),
    phone: z.string().trim(),
  }),
  images: z.string().trim().array(),
});
