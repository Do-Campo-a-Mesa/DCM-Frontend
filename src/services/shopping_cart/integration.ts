import { api } from '../api';
import {
  UserShoppingCartResponse,
  UserAddItemToShoppingCartInput,
  UserAddItemToShoppingCartResponse,
} from '../../lib/interfaces/ShoppingCart';

export async function getShoppingCartByUserId(
  id: string
): Promise<UserShoppingCartResponse> {
  return api.get(`/user/${id}/shopping_cart`);
}

export async function addProductToShoppingCart(
  AddItemInput: UserAddItemToShoppingCartInput
): Promise<UserAddItemToShoppingCartResponse> {
  return api.post('/shopping_cart', AddItemInput);
}
