import { api } from '../api';
import { AxiosResponse } from 'axios';
import { PartnersResponse } from '../../lib/interfaces/Partner';

export async function getHomePagePartners(): Promise<
  AxiosResponse<PartnersResponse>
> {
  return api.get('/partners');
}
