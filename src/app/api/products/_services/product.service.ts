import { products } from "../_data/products";

import type { Product, ProductInput } from "../_types/product";

export const getProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const createProduct = (data: ProductInput): Product => {
  const newProduct: Product = {
    id: products.length + 1,
    ...data,
  };

  products.push(newProduct);

  return newProduct;
};

export const updateProduct = (
  id: number,
  data: Partial<ProductInput>,
): Product | undefined => {
  const product = getProductById(id);

  if (!product) {
    return undefined;
  }

  Object.assign(product, data);

  return product;
};

export const deleteProduct = (id: number): Product | undefined => {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return undefined;
  }

  return products.splice(index, 1)[0];
};
