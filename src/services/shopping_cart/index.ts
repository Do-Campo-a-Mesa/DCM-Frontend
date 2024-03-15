import * as mock from './mock';
import * as integration from './integration';
import {
  UpdateItemInput,
  UserAddItemToShoppingCartInput,
  IterationShoppingCartResponse,
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
) => Promise<IterationShoppingCartResponse> = useMock
  ? mock.addProductToShoppingCart
  : integration.addProductToShoppingCart;

export const updateShoppingCartItem: (
  updateItemInput: UpdateItemInput
) => Promise<IterationShoppingCartResponse> = useMock
  ? mock.updateShoppingCartItem
  : integration.updateShoppingCartItem;
