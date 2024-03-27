import connectDB from "@/config/database";

export const GET = async () => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "DB is connected" }), {
      status: 200,
    });
  } catch (err) {
    const error = err instanceof Error ? err.message : "Something went worng";
    return new Response(error, { status: 500 });
  }
};
