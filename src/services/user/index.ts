import * as mock from './mock';
import * as integration from './integration';
import { CreateUserInput, GeneralResponse } from '../../lib/interfaces/User';

const useMock = process.env.NODE_ENV === 'mock';

export const createUserAccount: (
  createUserInput: CreateUserInput
) => Promise<GeneralResponse> = useMock
  ? mock.createUserAccount
  : integration.createUserAccount;
