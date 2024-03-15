import { api } from '../api';
import { UserShoppingCartResponse } from '../../lib/interfaces/ShoppingCart';

export async function getShoppingCartByUserId(
  id: string
): Promise<UserShoppingCartResponse> {
  return api.get(`/user/${id}/shopping_cart`);
}
