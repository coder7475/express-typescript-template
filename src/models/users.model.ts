import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, min: 0, max: 120 },
    email: { type: String, required: true, unique: true, match: /.+@.+\..+/ },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    versionKey: false, // disables __v field
  },
);

export const User = mongoose.model("User", userSchema);
