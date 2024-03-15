import shopping_cart from '../../tests/mock/shoppinng_cart/index.json';
import { UserShoppingCartResponse } from '../../lib/interfaces/ShoppingCart';

export async function getShoppingCartByUserId(): Promise<UserShoppingCartResponse> {
  return { data: shopping_cart };
}
