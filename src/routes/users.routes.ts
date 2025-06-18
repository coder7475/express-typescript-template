import controllers from "@/controller";
import { Router } from "express";

const userRoute = Router();

userRoute.get("/", controllers.userController);

export default userRoute;
