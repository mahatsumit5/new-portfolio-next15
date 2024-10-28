import mongoose from "mongoose";
const MONGO_URI = process.env.MONGODB_URI;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };
export const connectToDatabase = async () => {
  // console.log(MONGO_URI);
  if (!MONGO_URI) throw new Error("mongouri is missing");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: "Portfolio",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};
