export interface Item {
  id: number;
  name: string;
  cart_quantity: number;
  stock_quantity: number;
  price: number;
  total_price: number;
  photos?: string[];
}

export interface CartPerStore {
  store_id: string;
  name: string;
  logo?: string[];
  minimum_order_value: number;
  minimum_value_for_free_shipping: number;
  items: Item[];
}

export interface UserShoppingCartResponse {
  data: CartPerStore[];
}

export interface UserAddItemToShoppingCartInput {
  user_id: string;
  product_id: number;
  quantity: number;
}

export interface IterationShoppingCartResponse {
  message: string;
}

export interface UpdateItemInput {
  id: number;
  new_quantity: number;
}
