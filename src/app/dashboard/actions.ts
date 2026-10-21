"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth";

export const saveSettingsAction = async (formData: FormData) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  const theme = String(formData.get("theme") ?? "");

  console.log({
    userId: session.user.id,
    theme,
  });

  revalidatePath("/dashboard");
};
