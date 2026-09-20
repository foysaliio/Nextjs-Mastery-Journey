"use server";

import { revalidatePath, revalidateTag, updateTag } from "next/cache";

export async function revalidateProducts(): Promise<void> {
  revalidateTag("products", "max");
}

export async function refreshProductsImmediately(): Promise<void> {
  updateTag("products");
}

export const revalidateProductsPage = async (): Promise<void> => {
  revalidatePath("/time-revalidation-demo");
};
