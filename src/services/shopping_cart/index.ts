import * as mock from './mock';
import * as integration from './integration';
import {
  UserAddItemToShoppingCartInput,
  UserAddItemToShoppingCartResponse,
  UserShoppingCartResponse,
} from '../../lib/interfaces/ShoppingCart';

const useMock = process.env.NODE_ENV === 'mock';

export const getShoppingCartByUserId: (
  id: string
) => Promise<UserShoppingCartResponse> = useMock
  ? mock.getShoppingCartByUserId
  : integration.getShoppingCartByUserId;

export const addProductToShoppingCart: (
  AddItemInput: UserAddItemToShoppingCartInput
) => Promise<UserAddItemToShoppingCartResponse> = useMock
  ? mock.addProductToShoppingCart
  : integration.addProductToShoppingCart;
