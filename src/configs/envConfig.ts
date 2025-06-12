import dotenv from "dotenv";

// Load env variables from .env with error handling
try {
  const result = dotenv.config();

  // Check if .env file was loaded successfully
  if (result.error) {
    console.warn(
      "Warning: .env file not found or could not be loaded.\n",
      result.error.message,
    );
    process.exit(1);
  }
} catch (error) {
  console.error(
    "Error loading environment configuration:",
    error instanceof Error ? error.message : String(error),
  );
  process.exit(1);
}

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const NODE_ENV = process.env.NODE_ENV || "development";

export const env = {
  PORT,
  HOST,
  NODE_ENV,
};
