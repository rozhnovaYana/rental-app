import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async () => {
  try {
    await connectDB();
    const properties = await Property.find();
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Something went worng";
    return new Response(error, { status: 500 });
  }
};
