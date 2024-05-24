import * as mock from './mock';
import * as integration from './integration';
import {
  InsertCategoriesIntoProduct,
  ProductCategoryResponse,
} from '../../lib/interfaces/Categories';
import { GeneralResponse } from '../../lib/interfaces/User';

const useMock = process.env.NODE_ENV === 'mock';

export const getAllProductsCategories: () => Promise<ProductCategoryResponse> =
  useMock
    ? mock.getAllProductsCategories
    : integration.getAllProductsCategories;

export const insertCategoriesIntoProduct: (
  data: InsertCategoriesIntoProduct
) => Promise<GeneralResponse> = useMock
  ? mock.insertCategoriesIntoProduct
  : integration.insertCategoriesIntoProduct;
