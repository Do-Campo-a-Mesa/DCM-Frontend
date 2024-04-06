import businessValues from '../../tests/mock/partners/index.json';
import { BusinessValuesResponse } from '../../lib/interfaces/BusinessValues';

export async function getBusinessValues(): Promise<BusinessValuesResponse> {
  return { data: businessValues };
}
