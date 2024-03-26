import { api } from '../api';
import {
  UserShoppingCartResponse,
  UserAddItemToShoppingCartInput,
  IterationShoppingCartResponse,
  UpdateItemInput,
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

export async function updateShoppingCartItem(
  updateItemInput: UpdateItemInput
): Promise<IterationShoppingCartResponse> {
  return api.put('/shopping_cart', updateItemInput);
}

export async function deleteShoppingCartItem(
  id: number
): Promise<IterationShoppingCartResponse> {
  return api.delete(`/shopping_cart/${id}`);
}
