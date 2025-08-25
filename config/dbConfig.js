import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/practice_backend";

    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected successfully");
  }
   catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
