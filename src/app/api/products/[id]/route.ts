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

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { id } = await params;

  const productId = Number(id);

  const product = products.find((item) => item.id === productId);

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
