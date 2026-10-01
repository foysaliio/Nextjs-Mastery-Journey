import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

import { products } from "./_data/products";
import { createProductSchema } from "./_schemas/product.schema";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: products,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = createProductSchema.safeParse(body);

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

    const newProduct = {
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
  } catch (error) {
    console.error("Create product error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
