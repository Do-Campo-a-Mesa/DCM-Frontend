import { api } from '../api';
import {
  UserShoppingCartResponse,
  UserAddItemToShoppingCartInput,
  IterationShoppingCartResponse,
} from '../../lib/interfaces/ShoppingCart';

export async function getShoppingCartByUserId(
  id: string
): Promise<UserShoppingCartResponse> {
  return api.get(`/user/${id}/shopping_cart`);
}

export async function addProductToShoppingCart(
  AddItemInput: UserAddItemToShoppingCartInput
): Promise<IterationShoppingCartResponse> {
  return api.post('/shopping_cart', AddItemInput);
}
