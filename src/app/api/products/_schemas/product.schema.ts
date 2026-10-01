import * as z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, {
    error: "Name must be at least 2 characters",
  }),

  price: z.number().positive({
    error: "Price must be greater than 0",
  }),

  inStock: z.boolean(),
});

export const updateProductSchema = createProductSchema.partial();
