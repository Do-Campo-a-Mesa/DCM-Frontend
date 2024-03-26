import { api } from '../api';
import {
  FilterProductInput,
  ProductsResponse,
  ProductResponse,
} from '../../lib/interfaces/Product';

export async function getProducts(
  filterInput: FilterProductInput
): Promise<ProductsResponse> {
  return api.post('/products', filterInput);
}

export async function getProductById(id: number): Promise<ProductResponse> {
  return api.get(`/product/${id}`);
}

export async function getProductsByStoreId(
  id: number
): Promise<ProductsResponse> {
  return api.get(`/store/${id}/product`);
}
