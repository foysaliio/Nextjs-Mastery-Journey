"use server";

import * as z from "zod";
import { createProfile } from "./profile-store";

const ProfileSchema = z.object({
  name: z.string().trim().min(2, {
    error: "Name must be at least 2 characters.",
  }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .pipe(
      z.email({
        error: "Enter a valid email address.",
      }),
    ),

  age: z.coerce
    .number()
    .int({
      error: "Age must be a whole number.",
    })
    .min(18, {
      error: "You must be at least 18.",
    }),
});

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    age?: string[];
  };
  message?: string;
};

export async function submitProfile(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = ProfileSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    age: formData.get("age"),
  });

  if (!result.success) {
    return {
      errors: z.flattenError(result.error).fieldErrors,
      message: "Please fix the form errors.",
    };
  }

  const profile = createProfile(result.data);

  console.log("Created Profile:", profile);

  return {
    errors: {},
    message: "Profile created successfully.",
  };
}
