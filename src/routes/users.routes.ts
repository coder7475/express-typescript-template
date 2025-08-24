import { Router } from "express";

import { userController } from "@/controller/user.controller";
import { createUserSchema } from "@/schemas/user.schema";

const userRoute: Router = Router();

userRoute.post("/", userController.createUser);
userRoute.get("/", userController.getUsers);

export default userRoute;
