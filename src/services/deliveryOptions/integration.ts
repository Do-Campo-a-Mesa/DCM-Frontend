import { api } from '../api';
import { DeliveryOptionsResponse } from '../../lib/interfaces/DeliveryOptions';

export async function getAllDeliveryOptions(): Promise<DeliveryOptionsResponse> {
  return api.get('/category/product');
}
