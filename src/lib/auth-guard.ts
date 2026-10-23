import "server-only";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export const getCurrentSession = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};

export const requireUser = async () => {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/sign-in");
  }

  return session;
};
