import { api } from '../api';
import {
  FilterProductInput,
  ProductsResponse,
  ProductResponse,
  RegisterProductInput,
  Product,
} from '../../lib/interfaces/Product';
import { GeneralResponse } from '../../lib/interfaces/User';

export async function getProducts(
  filterInput: FilterProductInput
): Promise<ProductsResponse> {
  const products_response = await api.post('/product', filterInput);
  products_response.data.forEach((product: Product) => {
    product.photos = product.photos ? product.photos : ['/logo.png'];
  });
  return products_response;
}

export async function getProductById(id: number): Promise<ProductResponse> {
  return api.get(`/product/${id}`);
}

export async function getProductsByStoreId(
  id: number
): Promise<ProductsResponse> {
  return api.get(`/store/${id}/product`);
}

export async function registerProduct(
  data: RegisterProductInput
): Promise<GeneralResponse> {
  return api.post('/create_product', data);
}
