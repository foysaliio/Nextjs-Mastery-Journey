"use server";

import { revalidateTag } from "next/cache";

export async function revalidateProducts(): Promise<void> {
  revalidateTag("products", "max");
}
