import categories from '../../tests/mock/categories/product_categories.json';
import { ProductCategoryResponse } from '../../lib/interfaces/Categories';
import { GeneralResponse } from '../../lib/interfaces/User';

export async function getAllProductsCategories(): Promise<ProductCategoryResponse> {
  return { data: categories };
}

export async function insertCategoriesIntoProduct(): Promise<GeneralResponse> {
  return {
    status: 201,
    data: {
      message: 'Categorias Adicionadas com Sucesso ao produto',
    },
  };
}
