import { api } from '../api';
import { AxiosResponse } from 'axios';
import { Partner } from '../../lib/interfaces/Partner';

export async function getHomePagePartners(): Promise<AxiosResponse<Partner[]>> {
  return api.get('/partners');
}
