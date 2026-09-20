import { cacheLife } from "next/cache";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductsResponse {
  products: Product[];
}

export interface ProductResult {
  products: Product[];
  generatedAt: string;
}

export const getRevalidatedProducts = async (): Promise<ProductResult> => {
  "use cache";

  cacheLife({
    stale: 30,
    revalidate: 60,
    expire: 3600,
  });

  console.log("Generating fresh product data...");

  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsResponse = await response.json();

  return {
    products: data.products,
    generatedAt: new Date().toISOString(),
  };
};
