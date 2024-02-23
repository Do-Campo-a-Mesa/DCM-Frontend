import { api } from '../api';
import { ProductCategoryResponse } from '../../lib/interfaces/Categories';

export async function getAllProductsCategories(): Promise<ProductCategoryResponse> {
  return api.get('/category/product');
}
