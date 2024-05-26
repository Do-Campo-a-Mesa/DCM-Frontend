import { ProductOrder } from './Product';

export interface ProductsInOrder {
  id: number;
  price: string;
  quantity: string;
  total_value: string;
  obs?: string;
  product: ProductOrder;
}

export interface Order {
  isRecurring: boolean;
  id: number;
  order_date: string;
  expected_delivery_date: string;
  total_value_of_products: string;
  shipping_price: string;
  total_amount: string;
  type_of_payment: 'pix' | 'credit_card' | 'money';
  obs?: string;
  payment_status: 'pending' | 'paid';
  status: 'created' | 'preparing' | 'on_delivery_route' | 'delivered';
  user_id: string;
  store_id: string;
  products: ProductsInOrder[];
}

export interface OrderResponse {
  data: Order[];
}
