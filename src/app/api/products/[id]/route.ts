import { NextRequest, NextResponse } from "next/server";

import { products } from "../products";

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
  const { id } = await params;
  const body = await request.json();

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

  Object.assign(product, body);

  return NextResponse.json({
    success: true,
    message: "Product updated successfully",
    data: product,
  });
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
