import * as mock from './mock';
import * as integration from './integration';
import {
  CreateUserInput,
  GeneralResponse,
  LoginResponse,
  LoginUserInput,
} from '../../lib/interfaces/User';
import { ContactForm } from '../../lib/interfaces/Contact';

const useMock = process.env.NODE_ENV === 'mock';

export const createUserAccount: (
  createUserInput: CreateUserInput
) => Promise<GeneralResponse> = useMock
  ? mock.createUserAccount
  : integration.createUserAccount;

export const userLogIn: (
  userLoginInput: LoginUserInput
) => Promise<LoginResponse> = useMock ? mock.userLogIn : integration.userLogIn;

export const sendContactForm: (
  dataForm: ContactForm
) => Promise<GeneralResponse> = useMock
  ? mock.sendContactForm
  : integration.sendContactForm;
