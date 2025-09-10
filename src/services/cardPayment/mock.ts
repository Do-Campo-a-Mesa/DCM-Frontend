import cardPayment from '../../tests/mock/cardPayment/index.json';
import { CardPaymentResponse } from '../../lib/interfaces/CardPayment';

export async function getCardPayment(): Promise<CardPaymentResponse> {
  return { data: cardPayment };
}
