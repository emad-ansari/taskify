import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";
if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in .env");
}

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI, {
    } as mongoose.ConnectOptions);

    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); 
  }
}

// optional graceful disconnect
export async function disconnectDB(): Promise<void> {
  await mongoose.disconnect();
  console.log("MongoDB disconnected");
}
