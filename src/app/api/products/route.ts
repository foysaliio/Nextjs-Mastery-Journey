import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    price: 120,
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 60,
    inStock: true,
  },
];

const productSchema = z.object({
  name: z.string().min(2, {
    error: "Name must be at least 2 characters",
  }),

  price: z.number().positive({
    error: "Price must be greater than 0",
  }),

  inStock: z.boolean(),
});

export async function GET() {
  return NextResponse.json({
    success: true,
    data: products,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = productSchema.safeParse(body);

  if (!result.success) {
    const errors = z.flattenError(result.error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid product data",
        errors: errors.fieldErrors,
      },
      {
        status: 400,
      },
    );
  }

  const newProduct: Product = {
    id: products.length + 1,
    ...result.data,
  };

  products.push(newProduct);

  return NextResponse.json(
    {
      success: true,
      message: "Product created successfully",
      data: newProduct,
    },
    {
      status: 201,
    },
  );
}
