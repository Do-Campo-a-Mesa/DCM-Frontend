import partners from '../../tests/mock/partners/index.json';
import { PartnersResponse } from '../../lib/interfaces/Partner';

export async function getHomePagePartners(): Promise<PartnersResponse> {
  return { data: partners };
}
