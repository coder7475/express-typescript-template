import { IUser } from "@/interfaces/user.interface";
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    age: { type: Number, min: 0, max: 120 },
    email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("User", userSchema);
