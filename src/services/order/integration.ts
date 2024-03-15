import { api } from '../api';
import { OrderResponse } from '../../lib/interfaces/Order';

export async function getOrdersByUserId(id: string): Promise<OrderResponse> {
  return api.get(`/user/${id}/order`);
}
