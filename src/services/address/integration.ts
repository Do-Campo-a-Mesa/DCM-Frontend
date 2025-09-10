import { api } from '../api';
import { AddressResponse } from '../../lib/interfaces/Address';

export async function getAddress(): Promise<AddressResponse> {
  return api.get('/address');
}
