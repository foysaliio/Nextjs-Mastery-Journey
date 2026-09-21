"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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

  try {
    createProfile(result.data);
  } catch (error) {
    console.error("Create profile failed:", error);

    return {
      errors: {},
      message: "Could not create profile.",
    };
  }

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
    console.error(
      "Update validation failed:",
      z.flattenError(result.error).fieldErrors,
    );

    return;
  }

  try {
    const updatedProfile = updateProfileById(id, result.data);

    if (!updatedProfile) {
      throw new Error("Profile not found.");
    }
  } catch (error) {
    console.error("Update profile failed:", error);

    return;
  }

  revalidatePath("/forms-demo");
  revalidatePath("/forms-demo/edit");

  redirect("/forms-demo");
}

export async function deleteProfile(id: number): Promise<void> {
  try {
    const deleted = deleteProfileById(id);

    if (!deleted) {
      throw new Error("Profile not found.");
    }
  } catch (error) {
    console.error("Delete profile failed:", error);

    return;
  }

  revalidatePath("/forms-demo");
  revalidatePath("/forms-demo/edit");

  redirect("/forms-demo");
}
