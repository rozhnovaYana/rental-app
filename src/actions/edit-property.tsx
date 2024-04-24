"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CreatePropertyState } from "@/types/property";
import { PropertySchema } from "./schema";
import { authOptions } from "@/utils/authOptions";
import {
  deleteImagesFromCloudinary,
  uploadImagesToCloudinary,
} from "@/utils/cloudinary";
import Property from "@/models/Property";

const editProperty = async (
  { images, id }: { images: string[]; id?: string },
  state: CreatePropertyState,
  formData: FormData
): Promise<CreatePropertyState> => {
  if (!id) {
    return {
      errors: {
        _form: "The property ID is not found",
      },
    };
  }

  const convertToNumber = (field: FormDataEntryValue | null) =>
    field ? +field : 0;
  const session = await getServerSession(authOptions);

  const existedProperty = await Property.findById(id);

  // image cloudinary handle

  const currentImages = existedProperty.images;

  const prevURL: string[] = [];
  const urlTodelete = currentImages.reduce((acc: string[], image: string) => {
    if (images.indexOf(image) === -1) {
      acc.push(image);
    } else {
      prevURL.push(image);
    }
    return acc;
  }, []);
  const urlToUpload = images.filter((i) => currentImages.indexOf(i) === -1);
  const uploadedImages = await uploadImagesToCloudinary(urlToUpload);

  try {
    await deleteImagesFromCloudinary(urlTodelete);
  } catch (e) {
    return {
      errors: {
        _form: e instanceof Error ? e.message : "Pls, try again later",
      },
    };
  }

  if (existedProperty.owner.toString() != session.user.id) {
    return {
      errors: {
        _form: "Auth issue",
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
    beds: formData.get("beds") ? convertToNumber(formData.get("beds")) : null,
    baths: formData.get("baths")
      ? convertToNumber(formData.get("baths"))
      : null,
    square_feet: formData.get("square_feet")
      ? convertToNumber(formData.get("square_feet"))
      : null,
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
    images: [...prevURL, ...uploadedImages],
  };

  const validatedData = PropertySchema.safeParse(property);
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    await Property.findByIdAndUpdate(id, property);
  } catch (err) {
    return {
      errors: {
        _form: err instanceof Error ? err.message : "Something went wrong",
      },
    };
  }
  revalidatePath("/properties");
  redirect("/properties");
};

export default editProperty;
