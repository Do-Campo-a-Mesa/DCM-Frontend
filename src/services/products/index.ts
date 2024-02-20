import * as mock from './mock';
import * as integration from './integration';
import { ProductsResponse } from '../../lib/interfaces/Product';

const useMock = process.env.NODE_ENV === 'mock';

export const getHomePageProducts: () => Promise<ProductsResponse> = useMock
  ? mock.getHomePageProducts
  : integration.getHomePageProducts;
