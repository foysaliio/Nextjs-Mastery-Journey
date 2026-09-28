type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    price: 120,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 60,
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 45,
  },
];

export async function GET(request: Request) {
  const url = new URL(request.url);

  return Response.json({
    success: true,
    request: {
      method: request.method,
      endpoint: url.pathname,
      resource: "products",
    },
    data: products,
  });
}
