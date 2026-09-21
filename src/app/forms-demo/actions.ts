"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";

import {
  createProfile,
  deleteProfileById,
  updateProfileById,
} from "./profile-store";

const ProfileSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),

  email: z.string().trim().toLowerCase().email("Enter a valid email address."),

  age: z.coerce
    .number()
    .int("Age must be a whole number.")
    .min(18, "You must be at least 18."),
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

  createProfile(result.data);

  revalidatePath("/forms-demo");

  return {
    errors: {},
    message: "Profile created successfully.",
  };
}

export async function updateProfile(
  id: number,
  formData: FormData,
): Promise<void> {
  const result = ProfileSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    age: formData.get("age"),
  });

  if (!result.success) {
    console.log(
      "Update Validation Errors:",
      z.flattenError(result.error).fieldErrors,
    );

    return;
  }

  updateProfileById(id, result.data);

  revalidatePath("/forms-demo");
  revalidatePath("/forms-demo/edit");
}

export async function deleteProfile(id: number): Promise<void> {
  deleteProfileById(id);

  revalidatePath("/forms-demo");
  revalidatePath("/forms-demo/edit");
}
