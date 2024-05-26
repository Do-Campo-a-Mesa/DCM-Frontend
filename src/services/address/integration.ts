import { api } from '../api';
import { CardPaymentResponse } from '../../lib/interfaces/CardPayment';

export async function getCardPayment(): Promise<CardPaymentResponse> {
  return api.get('/cardPayment');
}
