import { baseUrl } from "./api";

export async function getProduct(productId) {
  const endpoint = `${baseUrl}/products/${productId}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}

export async function getProducts() {
  const endpoint = `${baseUrl}/products`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}
