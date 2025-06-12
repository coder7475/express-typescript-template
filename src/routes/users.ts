import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (_req, res) => {
  res.json({
    message: "This is users route",
  });
});

export default userRoute;
