import express from "express";
import indexRouter from "@/routes";
import userRoute from "@/routes/users.routes";
import globalErrorHandler from "@/middlewares/globalErrorHandler";

// Initialize the express app
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/", indexRouter);
app.use("/users", userRoute);

// global error handler
app.use(globalErrorHandler);

export default app;
