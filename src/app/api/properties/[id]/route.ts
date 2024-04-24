import { getServerSession } from "next-auth";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { authOptions } from "@/utils/authOptions";
import { deleteImagesFromCloudinary } from "@/utils/cloudinary";

export const GET = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  if (!id) {
    return new Response("ID is not found");
  }
  try {
    await connectDB();
    const property = await Property.findById(id);
    if (!property) {
      return new Response("Property is not found");
    }
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (err) {
    return new Response(
      err instanceof Error ? err.message : "Something went worng",
      { status: 500 }
    );
  }
};
export const DELETE = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectDB();
    const property = await Property.findById(id);

    if (!property) {
      return new Response("The property is not found.", { status: 400 });
    }
    const {
      user: { id: userId },
    } = await getServerSession(authOptions);

    if (!userId || userId != property.owner.toString()) {
      return new Response("User is not found", { status: 401 });
    }

    await deleteImagesFromCloudinary(property.images);
    await property.deleteOne();
    return new Response(JSON.stringify({ message: "Property deleted" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      err instanceof Error ? err.message : "Something went wrong."
    );
  }
};
