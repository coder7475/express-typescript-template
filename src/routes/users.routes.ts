import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (_req, res) => {
	res.json({
		status: 200,
		message: "This is users route",
	});
});

export default userRoute;
