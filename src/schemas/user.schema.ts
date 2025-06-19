// src/schemas/user.schema.ts
import { z } from "zod";

// Schema to validate user creation
export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().int().min(0).max(120),
  email: z.string().email(),
  isActive: z.boolean().optional(),
});

// Schema to validate user update (partial fields allowed)
export const updateUserSchema = createUserSchema.partial();

// Zod inferred types for use in TypeScript
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;

