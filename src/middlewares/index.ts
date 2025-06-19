import globalErrorHandler from "./globalErrorHandler";
import notFoundRoute from "./notFoundRoute";
import { validate } from "./validate";

export const middlewares = {
	notFoundRoute,
	globalErrorHandler,
	validate
};
