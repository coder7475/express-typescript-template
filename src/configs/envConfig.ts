import dotenv from "dotenv";
import { z } from "zod";

// Load env variables from .env with error handling
try {
	const result = dotenv.config();

	if (result.error) {
		console.warn("Warning: .env file not found or could not be loaded.\n", result.error.message);
		process.exit(1);
	}
} catch (error) {
	console.error("Error loading environment configuration:", error instanceof Error ? error.message : String(error));
	process.exit(1);
}

// ✅ Define Zod schema for validation
const envSchema = z.object({
	PORT: z
		.string()
		.default("3000")
		.transform(Number)
		.refine((val) => !isNaN(val), {
			message: "PORT must be a valid number",
		}),
	HOST: z.string().default("localhost"),
	NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
	MONGODB_URI: z.string().url("MONGODB_URI must be a valid URL"),
});

// ✅ Validate process.env
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error("❌ Invalid environment configuration:");
	console.error(parsedEnv.error.format());
	process.exit(1);
}

// ✅ Export validated, typed, and transformed env values
export const env = parsedEnv.data;

