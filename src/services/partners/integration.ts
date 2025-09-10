import { api } from '../api';
import { Partner, PartnersResponse } from '../../lib/interfaces/Partner';
import { StoreModel } from '../../lib/interfaces/PartnerRegister';
import { GeneralResponse } from '../../lib/interfaces/User';

export async function getHomePagePartners(): Promise<PartnersResponse> {
  const partners_response = await api.get('/partners');
  partners_response.data.forEach((partner: Partner) => {
    partner.logo = partner.logo ? partner.logo : '/logo.png';
  });
  return partners_response;
}

export async function registerPartner(
  data: StoreModel
): Promise<GeneralResponse> {
  return api.post('/store', data);
}
