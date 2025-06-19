import { userController } from "@/controller/user.controller";
import { middlewares } from "@/middlewares";
import { createUserSchema } from "@/schemas/user.schema";
import { Router } from "express";

const userRoute = Router();

userRoute.post("/", middlewares.validate(createUserSchema), userController.createUser);
userRoute.get("/", userController.getUsers);

export default userRoute;
