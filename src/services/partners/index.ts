import * as mock from './mock';
import * as integration from './integration';
import { PartnersResponse } from '../../lib/interfaces/Partner';
import { GeneralResponse } from '../../lib/interfaces/User';
import { StoreModel } from '../../lib/interfaces/PartnerRegister';

const useMock = process.env.NODE_ENV === 'mock';

export const getHomePagePartners: () => Promise<PartnersResponse> = useMock
  ? mock.getHomePagePartners
  : integration.getHomePagePartners;

export const registerPartner: (data: StoreModel) => Promise<GeneralResponse> =
  useMock ? mock.registerPartner : integration.registerPartner;
