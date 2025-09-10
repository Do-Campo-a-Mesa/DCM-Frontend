import address from '../../tests/mock/address/index.json';
import { AddressResponse } from '../../lib/interfaces/Address';

export async function getAddress(): Promise<AddressResponse> {
  return { data: address };
}
