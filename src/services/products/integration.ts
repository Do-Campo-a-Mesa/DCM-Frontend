import { api } from '../api';
import {
  FilterProductInput,
  ProductsResponse,
} from '../../lib/interfaces/Product';

export async function getProducts(
  filterInput: FilterProductInput
): Promise<ProductsResponse> {
  return api.post('/products', filterInput);
}
