import categories from '../../tests/mock/categories/product_categories.json';
import { ProductCategoryResponse } from '../../lib/interfaces/Categories';

export async function getAllProductsCategories(): Promise<ProductCategoryResponse> {
  return { data: categories };
}
