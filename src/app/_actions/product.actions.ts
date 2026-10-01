"use server";

import { revalidatePath } from "next/cache";

import { createProductSchema } from "../api/products/_schemas/product.schema";

import { createProduct } from "../api/products/_services/product.service";

export const createProductAction = async (formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
    price: Number(formData.get("price")),
    inStock: formData.get("inStock") === "on",
  };

  const result = createProductSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: "Invalid product data",
    };
  }

  const product = createProduct(result.data);

  revalidatePath("/products");

  return {
    success: true,
    message: "Product created successfully",
    data: product,
  };
};
