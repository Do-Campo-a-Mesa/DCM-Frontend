import shopping_cart from '../../tests/mock/shopping_cart/index.json';
import {
  IterationShoppingCartResponse,
  UserShoppingCartResponse,
} from '../../lib/interfaces/ShoppingCart';

export async function getShoppingCartByUserId(): Promise<UserShoppingCartResponse> {
  return { data: shopping_cart };
}

export async function addProductToShoppingCart(): Promise<IterationShoppingCartResponse> {
  return { message: 'Produto adicionado com sucesso ao carrinho de compras' };
}

export async function updateShoppingCartItem(): Promise<IterationShoppingCartResponse> {
  return { message: 'Item no carrinho de compras atualizado com sucesso' };
}

export async function deleteShoppingCartItem(): Promise<IterationShoppingCartResponse> {
  return { message: 'Item do carrinho de compras foi removido com sucesso' };
}
