import * as mock from './mock';
import * as integration from './integration';
import { UserShoppingCartResponse } from '../../lib/interfaces/ShoppingCart';

const useMock = process.env.NODE_ENV === 'mock';

export const getShoppingCartByUserId: (
  id: string
) => Promise<UserShoppingCartResponse> = useMock
  ? mock.getShoppingCartByUserId
  : integration.getShoppingCartByUserId;
