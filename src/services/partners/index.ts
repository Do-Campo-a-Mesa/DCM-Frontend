import * as mock from './mock';
import * as integration from './integration';

const useMock = process.env.NODE_ENV === 'mock';

export const getHomePagePartners = useMock
  ? mock.getHomePagePartners
  : integration.getHomePagePartners;
