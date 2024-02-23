import * as mock from './mock';
import * as integration from './integration';
import { PartnersResponse } from '../../lib/interfaces/Partner';

const useMock = process.env.NODE_ENV === 'mock';

export const getHomePagePartners: () => Promise<PartnersResponse> = useMock
  ? mock.getHomePagePartners
  : integration.getHomePagePartners;
