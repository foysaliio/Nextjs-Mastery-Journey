"use server";

import * as z from "zod";

const ProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, {
      error: "Name must be at least 2 characters.",
    })
    .max(50, {
      error: "Name must be 50 characters or less.",
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
    })
    .max(120, {
      error: "Enter a valid age.",
    }),
});

export const submitProfile = async (formData: FormData): Promise<void> => {
  const result = ProfileSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    age: formData.get("age"),
  });

  if (!result.success) {
    const errors = z.flattenError(result.error).fieldErrors;

    console.log("Validation Errors:", errors);
    return;
  }

  console.log("Validated Profile:", result.data);
};
