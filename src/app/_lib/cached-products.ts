export interface CachedProduct {
  id: number;
  title: string;
  price: string;
}

interface ProductResponse {
  products: CachedProduct[];
}

export const getCachedProducts = async (): Promise<CachedProduct[]> => {
  "use cache";

  console.log("Fetching products from API");

  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductResponse = await response.json();

  return data.products;
};
