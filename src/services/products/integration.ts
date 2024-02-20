import { api } from '../api';
import { ProductsResponse } from '../../lib/interfaces/Product';

export async function getHomePageProducts(): Promise<ProductsResponse> {
  return api.get('/products');
}
