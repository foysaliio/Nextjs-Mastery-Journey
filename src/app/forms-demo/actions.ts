"use server";

import * as z from "zod";

import {
  createProfile,
  updateProfileById,
  deleteProfileById,
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

  const profile = createProfile(result.data);

  console.log("Created Profile:", profile);

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

  const updatedProfile = updateProfileById(id, result.data);

  if (!updatedProfile) {
    console.log("Profile not found.");

    return;
  }

  console.log("Updated Profile:", updatedProfile);
}

export async function deleteProfile(id: number): Promise<void> {
  const deleted = deleteProfileById(id);

  if (!deleted) {
    console.log("Profile not found.");

    return;
  }

  console.log("Deleted Profile ID:", id);
}
