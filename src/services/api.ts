import axios from 'axios';
import type { Product, ProductsResponse } from '../types/product';
import type { Category } from '../types/category';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

// Fetch a general list of products
export async function getAllProducts(limit = 20): Promise<ProductsResponse> {
  const response = await api.get<ProductsResponse>(`/products?limit=${limit}`);
  return response.data;
}

// Fetch all categories (for the category grid + FilterBar)
export async function getCategories(): Promise<Category[]> {
  const response = await api.get<Category[]>('/products/categories');
  return response.data;
}

// Fetch products belonging to one category
export async function getProductsByCategory(category: string): Promise<ProductsResponse> {
  const response = await api.get<ProductsResponse>(`/products/category/${category}`);
  return response.data;
}

// Search products by keyword
export async function searchProducts(query: string): Promise<ProductsResponse> {
  const response = await api.get<ProductsResponse>(`/products/search?q=${query}`);
  return response.data;
}

// Fetch a single product by ID (for the detail view)
export async function getProductById(id: number): Promise<Product> {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
}
import type { LoginCredentials, AuthUser } from '../types/auth';

// Auth simulation using DummyJSON
export async function loginUser(credentials: LoginCredentials): Promise<AuthUser> {
  const response = await api.post<AuthUser>('/auth/login', {
    username: credentials.username,
    password: credentials.password,
    expiresInMins: 60,
  });
  return response.data;
}