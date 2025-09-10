import * as mock from './mock';
import * as integration from './integration';
import {
  FilterProductInput,
  ProductsResponse,
  ProductResponse,
  RegisterProductInput,
} from '../../lib/interfaces/Product';
import { GeneralResponse } from '../../lib/interfaces/User';

const useMock = process.env.NODE_ENV === 'mock';

export const getProducts: (
  filterInput: FilterProductInput
) => Promise<ProductsResponse> = useMock
  ? mock.getProducts
  : integration.getProducts;

export const getProductById: (id: number) => Promise<ProductResponse> = useMock
  ? mock.getProductById
  : integration.getProductById;

export const getProductsByStoreId: (id: number) => Promise<ProductsResponse> =
  useMock ? mock.getProductsByStoreId : integration.getProductsByStoreId;

export const registerProduct: (
  data: RegisterProductInput
) => Promise<GeneralResponse> = useMock
  ? mock.registerProduct
  : integration.registerProduct;
