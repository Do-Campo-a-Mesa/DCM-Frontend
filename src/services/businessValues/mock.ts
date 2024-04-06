import businessValues from '../../tests/mock/businessValues/index.json';
import { BusinessValuesResponse } from '../../lib/interfaces/BusinessValues';

export async function getBusinessValues(): Promise<BusinessValuesResponse> {
  return { data: businessValues };
}
