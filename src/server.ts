import app from "@/app";
import { env } from "@/configs/envConfig";
import mongoose from "mongoose";

const server = app.listen(env.PORT, () => {
  console.log(
    `🚀 Server (${env.NODE_ENV}) running at http://${env.HOST}:${env.PORT}`,
  );

  // connect to database
  connectToMongoDB();
});

async function connectToMongoDB() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit if DB connection fails
  }
}

// Graceful shutdown handler
const onCloseSignal = async () => {
  console.log("🛑 SIGINT/SIGTERM received, shutting down gracefully...");

  try {
    await mongoose.disconnect();
    console.log("✅ Disconnected from MongoDB");
  } catch (err) {
    console.error("⚠️ Error disconnecting from MongoDB:", err);
  }
  server.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });

  // Force shutdown if it takes too long
  setTimeout(() => {
    console.error("❌ Forcefully exiting after timeout");
    process.exit(1);
  }, 10000).unref();
};

// Listen to termination signals
process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
