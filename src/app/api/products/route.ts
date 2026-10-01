import { NextRequest, NextResponse } from "next/server";

import { Product, products } from "./products";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: products,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newProduct: Product = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
    inStock: body.inStock,
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
