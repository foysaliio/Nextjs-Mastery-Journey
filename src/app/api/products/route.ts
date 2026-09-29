import { NextRequest, NextResponse } from "next/server";

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

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
  {
    id: 3,
    name: "USB-C Hub",
    price: 45,
    inStock: false,
  },
];

export const GET = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  const method = request.method;

  const userAgent = request.headers.get("user-agent");

  return NextResponse.json(
    {
      success: true,
      request: {
        method,
        pathname,
        userAgent,
      },
      data: products,
    },
    {
      status: 200,
      headers: {
        "X-API-Version": "1.0",
      },
    },
  );
}
