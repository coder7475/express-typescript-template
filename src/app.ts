import express, { type Express } from "express";
import helmet from "helmet";
import cors from "cors";

import indexRouter from "@/routes";
import userRoute from "@/routes/users.routes";
import { middlewares } from "@/middlewares";

const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Routes
app.use("/", indexRouter);
app.use("/users", userRoute);

// Not found route handler
app.use(middlewares.notFoundRoute);
// Global error handler
app.use(middlewares.globalErrorHandler);

export default app;
