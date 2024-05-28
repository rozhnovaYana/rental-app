import { revalidatePath } from "next/cache";
import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request: Request) => {
  const searchParams = new URL(request.url)?.searchParams;
  const location = searchParams.get("location");
  const type = searchParams.get("type");
  await connectDB();

  const locationRegexp = new RegExp(location || "", "i");
  const typeRegexp = new RegExp(!type || type === "all" ? "" : type, "i");
  const properties = await Property.find({
    type: typeRegexp,
    $or: [
      {
        name: locationRegexp,
      },
      { description: locationRegexp },
      { "location.state": locationRegexp },
      { "location.street": locationRegexp },
      { "location.city": locationRegexp },
      { "location.zipcode": locationRegexp },
    ],
  });

  return new Response(
    JSON.stringify({
      properties,
    }),
    { status: 200 }
  );
};
