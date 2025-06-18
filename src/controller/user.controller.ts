import { Request, Response } from "express";
import { User } from "@/models/users.model";

export const userController = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const allUsers = await User.find();
  res.json({
    status: 200,
    message: "Fetched Successfully",
    data: allUsers,
  });
};
