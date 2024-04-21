import * as mock from './mock';
import * as integration from './integration';
import { DeliveryOptionsResponse } from '../../lib/interfaces/DeliveryOptions';

const useMock = process.env.NODE_ENV === 'mock';

export const getAllDeliveryOptions: () => Promise<DeliveryOptionsResponse> =
  useMock ? mock.getAllDeliveryOptions : integration.getAllDeliveryOptions;
