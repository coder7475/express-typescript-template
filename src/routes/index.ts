import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (_req, res) => {
	res.send("Hello from Express + TypeScript!");
});

export default indexRouter;
