import * as mock from './mock';
import * as integration from './integration';
import { BusinessValuesResponse } from '../../lib/interfaces/BusinessValues';

const useMock = process.env.NODE_ENV === 'mock';

export const getBusinessValues: () => Promise<BusinessValuesResponse> = useMock
  ? mock.getBusinessValues
  : integration.getBusinessValues;
