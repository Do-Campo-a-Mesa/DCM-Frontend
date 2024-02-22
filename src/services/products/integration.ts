import { api } from '../api';
import {
  FilterProductInput,
  ProductsResponse,
} from '../../lib/interfaces/Product';

export async function getHomePageProducts(
  filterInput: FilterProductInput
): Promise<ProductsResponse> {
  return api.post('/products', filterInput);
}
