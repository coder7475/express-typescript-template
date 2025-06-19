import type { ErrorRequestHandler } from "express";
import { env } from "@/configs/envConfig";

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	res.status(statusCode).json({
		success: false,
		message,
		stack: env.NODE_ENV === "production" ? undefined : err.stack,
	});
};

export default globalErrorHandler;
