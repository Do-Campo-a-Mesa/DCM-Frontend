import { api } from '../api';
import { PartnersResponse } from '../../lib/interfaces/Partner';
import { StoreModel } from '../../lib/interfaces/PartnerRegister';
import { GeneralResponse } from '../../lib/interfaces/User';

export async function getHomePagePartners(): Promise<PartnersResponse> {
  return api.get('/partners');
}

export async function registerPartner(
  data: StoreModel
): Promise<GeneralResponse> {
  return api.post('/store', data);
}
