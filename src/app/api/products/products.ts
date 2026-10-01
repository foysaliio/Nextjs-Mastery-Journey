export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export const products: Product[] = [
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
