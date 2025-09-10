import * as mock from './mock';
import * as integration from './integration';
import { CardPaymentResponse } from '../../lib/interfaces/CardPayment';

const useMock = process.env.NODE_ENV === 'mock';

export const getCardPayment: () => Promise<CardPaymentResponse> = useMock
  ? mock.getCardPayment
  : integration.getCardPayment;
