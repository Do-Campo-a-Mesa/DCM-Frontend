import { api } from '../api';
import { BusinessValuesResponse } from '../../lib/interfaces/BusinessValues';

export async function getBusinessValues(): Promise<BusinessValuesResponse> {
  return api.get('/businessValues');
}
