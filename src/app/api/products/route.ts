import { NextRequest, NextResponse } from "next/server";

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

export async function GET() {
  return NextResponse.json({
    success: true,
    data: products,
  });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const index = products.findIndex((product) => product.id === body.id);

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

  products[index] = {
    id: body.id,
    name: body.name,
    price: body.price,
    inStock: body.inStock,
  };

  return NextResponse.json({
    success: true,
    message: "Product replaced successfully",
    data: products[index],
  });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();

  const product = products.find((item) => item.id === body.id);

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
