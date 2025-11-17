import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connect database successfully ${conn.connection.host}`);
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};
