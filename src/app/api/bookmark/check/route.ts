import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import User from "@/models/User";

export const POST = async (request: Request) => {
  const resp = {
    isBooked: false,
  };
  try {
    const data = await getServerSession(authOptions);
    const { propertyId } = await request.json();

    if (data?.user && data?.user.id) {
      const userDB = await User.findOne(data?.user.id);
      if (userDB) {
        resp.isBooked = await userDB?.bookmarks?.includes(propertyId);
      }
    }
  } catch (error) {
    new Response(
      JSON.stringify(
        error instanceof Error ? error.message : "Something went wrong"
      )
    );
  }

  return new Response(JSON.stringify(resp));
};
