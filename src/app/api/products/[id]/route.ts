import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

import { products } from "../_data/products";
import { updateProductSchema } from "../_schemas/product.schema";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return NextResponse.json(
      {
        success: false,
        message: "Product not found",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    success: true,
    data: product,
  });
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await request.json();

    const result = updateProductSchema.safeParse(body);

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

    const product = products.find((item) => item.id === Number(id));

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        },
      );
    }

    Object.assign(product, result.data);

    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Update product error:", error);

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

export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  const index = products.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return NextResponse.json(
      {
        success: false,
        message: "Product not found",
      },
      {
        status: 404,
      },
    );
  }

  const deletedProduct = products.splice(index, 1)[0];

  return NextResponse.json({
    success: true,
    message: "Product deleted successfully",
    data: deletedProduct,
  });
}
