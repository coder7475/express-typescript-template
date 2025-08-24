import type { ErrorRequestHandler, RequestHandler } from "express";
import type { ZodSchema } from "zod";
import globalErrorHandler from "./globalErrorHandler";
import notFoundRoute from "./notFoundRoute";

export type Middlewares = {
  globalErrorHandler: ErrorRequestHandler;
  notFoundRoute: RequestHandler;
};

export const middlewares: Middlewares = {
  globalErrorHandler,
  notFoundRoute,
};
