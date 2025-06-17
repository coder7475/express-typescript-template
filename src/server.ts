import { type Server } from "node:http";

import app from "@/app";
import { env } from "@/configs/envConfig";

const server: Server = app.listen(env.PORT, () => {
	console.log(`🚀 Server (${env.NODE_ENV}) running at http://${env.HOST}:${env.PORT}`);
});


// Graceful shutdown handler
const onCloseSignal = () => {
	console.log("🛑 SIGINT/SIGTERM received, shutting down gracefully...");

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
