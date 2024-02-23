import * as mock from './mock';
import * as integration from './integration';
import { ProductCategoryResponse } from '../../lib/interfaces/Categories';

const useMock = process.env.NODE_ENV === 'mock';

export const getAllProductsCategories: () => Promise<ProductCategoryResponse> =
  useMock
    ? mock.getAllProductsCategories
    : integration.getAllProductsCategories;
