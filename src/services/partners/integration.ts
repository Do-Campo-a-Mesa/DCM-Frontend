import { api } from '../api';
import { PartnersResponse } from '../../lib/interfaces/Partner';

export async function getHomePagePartners(): Promise<PartnersResponse> {
  return api.get('/partners');
}
