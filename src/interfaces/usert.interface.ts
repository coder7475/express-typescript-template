import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  age: number;
  email: string;
  isActive?: boolean; // optional because default exists
  createdAt?: Date;
  updatedAt?: Date;
}
