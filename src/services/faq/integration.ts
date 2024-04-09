import { api } from '../api';
import { FAQResponse } from '../../lib/interfaces/FAQ';

export async function getFAQ(): Promise<FAQResponse> {
  return api.get('/FAQ');
}
