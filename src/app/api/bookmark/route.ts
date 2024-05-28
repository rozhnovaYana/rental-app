import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import User from "@/models/User";
import connectDB from "@/config/database";

export const POST = async (request: Request) => {
  const resp = {
    isBooked: false,
    message: "",
    isSucces: true,
  };
  try {
    await connectDB();
    const data = await getServerSession(authOptions);
    const { propertyId } = await request.json();

    if (!data?.user || !data?.user?.id) {
      resp.message = "Only logged users can BookmarkProperty";
      resp.isSucces = false;
    } else {
      const user = data?.user;
      const userDB = await User.findOne(user.id);
      if (!userDB) {
        resp.message = "Cannot find the user";
        resp.isSucces = false;
        return;
      }
      if (userDB?.bookmarks?.includes(propertyId)) {
        await userDB?.bookmarks?.pull(propertyId);
        resp.isBooked = false;
        resp.message = "The property was removed from the List";
      } else {
        await userDB?.bookmarks?.push(propertyId);
        resp.isBooked = true;
        resp.message = "The property was added to the List";
      }
      await userDB.save();
      resp.isSucces = true;
    }
  } catch (error) {
    resp.isSucces = false;
    resp.message =
      error instanceof Error ? error.message : "Something went wrong";
  }

  return new Response(JSON.stringify(resp));
};
export const GET = async () => {
  await connectDB();
  const data = await getServerSession(authOptions);
  const user = await User.findOne(data?.user?.id).populate("bookmarks");
  const response = user
    ? { properties: user?.bookmarks || [] }
    : { error: "The user is not found" };
  return new Response(JSON.stringify(response));
};
