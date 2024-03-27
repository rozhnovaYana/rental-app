import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  const url = process.env.MONGODB_URI;
  if (!url) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(url);
    connected = true;
    console.log("MongoDB connected");
  } catch (err) {
    throw new Error(
      err instanceof Error ? err.message : "Something went worng"
    );
  }
};
export default connectDB;
