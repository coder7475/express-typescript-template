import { User } from "@/models/users.model";
import { Router } from "express";

const userRoute = Router();

userRoute.get("/", async (_req, res) => {
  const allUsers = await User.find();
  res.json({
    status: 200,
    message: "Fetched Successfully",
    data: allUsers,
  });
});

export default userRoute;
