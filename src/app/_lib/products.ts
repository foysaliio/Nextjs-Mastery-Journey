export interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
  },
  {
    id: 2,
    name: "Keyboard",
    price: 4500,
  },
  {
    id: 3,
    name: "Monitor",
    price: 12000,
  },
];

export const getProducts = async (): Promise<Product[]> => {
  return products;
};
