import deliveryOptions from '../../tests/mock/deliveryOptions/deliveryOptions.json';
import { DeliveryOptionsResponse } from '../../lib/interfaces/DeliveryOptions';

export async function getAllDeliveryOptions(): Promise<DeliveryOptionsResponse> {
  return { data: deliveryOptions };
}
