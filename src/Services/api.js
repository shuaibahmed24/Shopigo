// src/services/api.js
export const API_BASE = "https://fakestoreapi.com";

export async function fetchAllProducts() {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
