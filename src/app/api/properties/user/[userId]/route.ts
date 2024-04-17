import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (
  request: Request,
  { params: { userId } }: { params: { userId: string } }
) => {
  if (!userId) {
    return new Response("UserId is not defined", { status: 400 });
  }
  try {
    await connectDB();
    const properties = await Property.find({
      owner: userId,
    });
    if (!properties) {
      return new Response(JSON.stringify([]));
    }

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (err) {
    return new Response(
      err instanceof Error
        ? err.message
        : "Something went wrong. Try again later."
    );
  }
};
