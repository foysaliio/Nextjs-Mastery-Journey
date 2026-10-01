import { NextRequest, NextResponse } from "next/server";

import * as z from "zod";

import { updateProductSchema } from "../_schemas/product.schema";

import {
  deleteProduct,
  getProductById,
  updateProduct,
} from "../_services/product.service";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export const GET = async (_request: NextRequest, { params }: RouteContext) => {
  const { id } = await params;

  const product = getProductById(Number(id));

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
};

export const PATCH = async (request: NextRequest, { params }: RouteContext) => {
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

    const product = updateProduct(Number(id), result.data);

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
};

export const DELETE = async (
  _request: NextRequest,
  { params }: RouteContext,
) => {
  const { id } = await params;

  const product = deleteProduct(Number(id));

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
    message: "Product deleted successfully",
    data: product,
  });
};
