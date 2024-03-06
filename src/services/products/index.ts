import * as mock from './mock';
import * as integration from './integration';
import {
  FilterProductInput,
  ProductsResponse,
} from '../../lib/interfaces/Product';

const useMock = process.env.NODE_ENV === 'mock';

export const getProducts: (
  filterInput: FilterProductInput
) => Promise<ProductsResponse> = useMock
  ? mock.getProducts
  : integration.getProducts;
