import * as mock from './mock';
import * as integration from './integration';
import { OrderResponse } from '../../lib/interfaces/Order';

const useMock = process.env.NODE_ENV === 'mock';

export const getOrdersByUserId: (id: string) => Promise<OrderResponse> = useMock
  ? mock.getOrdersByUserId
  : integration.getOrdersByUserId;

export const getOrderById: (id: number) => Promise<OrderResponse> = useMock
  ? mock.getOrderById
  : integration.getOrderById;
