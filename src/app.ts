import express from "express";
import indexRouter from "@/routes";
import userRoute from "@/routes/users.routes";
import { middlewares } from "@/middlewares";
// Initialize the express app
const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/", indexRouter);
app.use("/users", userRoute);

// not found routes
app.use(middlewares.notFoundRoute);
// global error handler
app.use(middlewares.globalErrorHandler);

export default app;
