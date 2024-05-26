import * as mock from './mock';
import * as integration from './integration';
import { AddressResponse } from '../../lib/interfaces/Address';

const useMock = process.env.NODE_ENV === 'mock';

export const getAddress: () => Promise<AddressResponse> = useMock
  ? mock.getAddress
  : integration.getAddress;
