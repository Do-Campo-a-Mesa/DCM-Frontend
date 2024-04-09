import * as mock from './mock';
import * as integration from './integration';
import { FAQResponse } from '../../lib/interfaces/FAQ';

const useMock = process.env.NODE_ENV === 'mock';

export const getFAQ: () => Promise<FAQResponse> = useMock
  ? mock.getFAQ
  : integration.getFAQ;
