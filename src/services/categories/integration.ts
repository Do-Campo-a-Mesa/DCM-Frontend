import { api } from '../api';
import {
  InsertCategoriesIntoProduct,
  ProductCategoryResponse,
} from '../../lib/interfaces/Categories';
import { GeneralResponse } from '../../lib/interfaces/User';

export async function getAllProductsCategories(): Promise<ProductCategoryResponse> {
  return api.get('/category/product');
}

export async function insertCategoriesIntoProduct(
  data: InsertCategoriesIntoProduct
): Promise<GeneralResponse> {
  return api.post('/category/product', data);
}
