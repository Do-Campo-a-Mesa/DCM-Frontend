import products from '../../tests/mock/products/index.json';
import { ProductsResponse } from '../../lib/interfaces/Product';

export async function getHomePageProducts(): Promise<ProductsResponse> {
  return { data: products };
}
