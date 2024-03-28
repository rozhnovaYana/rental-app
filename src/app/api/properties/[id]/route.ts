import connectDB from "@/config/database";
import Property from "@/models/Property";

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
