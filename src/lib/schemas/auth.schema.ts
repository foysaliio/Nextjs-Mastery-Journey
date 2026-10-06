import * as z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z.email("Enter a valid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signInSchema = z.object({
  email: z.email("Enter a valid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});
