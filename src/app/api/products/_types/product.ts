export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export interface ProductInput {
  name: string;
  price: number;
  inStock: boolean;
}
