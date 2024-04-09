import FAQ from '../../tests/mock/faq/index.json';
import { FAQResponse } from '../../lib/interfaces/FAQ';

export async function getFAQ(): Promise<FAQResponse> {
  return { data: FAQ };
}
