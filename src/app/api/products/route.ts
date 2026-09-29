import { NextResponse } from "next/server";

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
  {
    id: 3,
    name: "USB-C Hub",
    price: 45,
    inStock: false,
  },
];

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Products fetched successfully",
      data: products,
    },
    {
      status: 200,
    },
  );
}
