import { ObjectId } from "mongodb";
import { z } from "zod";

import {
  amentitiesList,
  rentalTypes,
} from "@/components/add-property/AddPropertyFormData";

export const PropertySchema = z.object({
  owner: z.instanceof(ObjectId),
  name: z.string().trim().min(3),
  type: z.enum(rentalTypes, {
    invalid_type_error: "The field should be selected",
  }),
  description: z.string().trim().min(10),
  location: z.object({
    street: z.string().trim().min(4, {
      message: "Street has to be a string and have at least 4 char",
    }),
    city: z.string().trim().min(4, {
      message: "City has to be a string and have at least 4 char",
    }),
    state: z
      .string()
      .trim()
      .min(2, { message: "State has to be a string and have at least 2 char" }),
    zipcode: z.string().trim().min(4, {
      message: "Zipcode has to be a string and have at least 4 char",
    }),
  }),
  beds: z
    .number({
      invalid_type_error: "The field has to be a number",
    })
    .max(10000),
  baths: z
    .number({
      invalid_type_error: "The field has to be a number",
    })
    .max(10000),
  square_feet: z
    .number({
      invalid_type_error: "The field has to be a number",
    })
    .max(10000),
  amenities: z
    .array(z.string())
    .refine((values) =>
      values.every((value) => amentitiesList.includes(value))
    ),
  rates: z.object({
    nightly: z.number().optional(),
    weekly: z.number().optional(),
    monthly: z.number().optional(),
  }),
  seller_info: z.object({
    name: z.string().trim().min(4, {
      message: "Name should be a string and have at least 4 char",
    }),
    email: z.string().trim().email().endsWith(".com").min(4, {
      message: "Email should be an email and have at least 4 char",
    }),
    phone: z.string().trim().min(4, {
      message: "Phone should be a string and have at least 4 char",
    }),
  }),
  images: z.string().trim().array().nonempty(),
});
