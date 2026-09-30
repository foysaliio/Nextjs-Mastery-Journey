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
];

export const GET = async (request: NextRequest) => {
  const userAgent = request.headers.get("user-agent");

  const themeCookie = request.cookies.get("theme");

  const response = NextResponse.json({
    success: true,
    requestInfo: {
      userAgent,
      theme: themeCookie?.value ?? "not-set",
    },
    data: products,
  });

  response.headers.set("X-API-Version", "1.0");

  response.cookies.set("theme", "dark", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return response;
};
