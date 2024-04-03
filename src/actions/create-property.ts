"use server";

import { CreatePropertyState } from "@/types/property";
import { PropertySchema } from "./schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Property from "@/models/Property";

const createProperty = async (
  customFormData: string[],
  state: CreatePropertyState,
  formData: FormData
): Promise<CreatePropertyState> => {
  const convertToNumber = (field: FormDataEntryValue | null) => field && +field;
  const session = await getServerSession(authOptions);
  if (!session && !session.user.id) {
    return {
      errors: {
        _form: "User is not found",
      },
    };
  }

  const property = {
    owner: session.user.id,
    name: formData.get("name"),
    type: formData.get("type"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: convertToNumber(formData.get("beds")),
    baths: convertToNumber(formData.get("baths")),
    square_feet: convertToNumber(formData.get("baths")),
    amenities: formData.getAll("amenities"),
    rates: {
      nightly: convertToNumber(formData.get("rates.nightly")),
      weekly: convertToNumber(formData.get("rates.weekly")),
      monthly: convertToNumber(formData.get("rates.monthly")),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
    images: [],
  };

  const validatedData = PropertySchema.safeParse(property);
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }
  try {
    const newProperty = new Property(validatedData.data);
    await newProperty.save();
    
  } catch (err) {
    return {
      errors: {
        _form: err instanceof Error ? err.message : "Something went wrong",
      },
    };
  }
  return {};
};
export default createProperty;
