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
  {
    id: 3,
    name: "USB-C Hub",
    price: 45,
    inStock: false,
  },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("q");
  const stock = searchParams.get("inStock");

  let filteredProducts = [...products];

  if (query) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  if (stock) {
    const inStock = stock === "true";

    filteredProducts = filteredProducts.filter(
      (product) => product.inStock === inStock,
    );
  }

  return NextResponse.json({
    success: true,
    count: filteredProducts.length,
    data: filteredProducts,
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

export async function DELETE(request: NextRequest) {
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

  const deletedProduct = products.splice(index, 1)[0];

  return NextResponse.json({
    success: true,
    message: "Product deleted successfully",
    data: deletedProduct,
  });
}
