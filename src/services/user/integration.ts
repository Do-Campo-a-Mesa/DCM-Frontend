import { api } from '../api';
import {
  CreateUserInput,
  GeneralResponse,
  LoginResponse,
  LoginUserInput,
} from '../../lib/interfaces/User';
import { ContactForm } from '../../lib/interfaces/Contact';

export async function createUserAccount(
  createUserInput: CreateUserInput
): Promise<GeneralResponse> {
  return api.post(`/user`, createUserInput);
}

export async function userLogIn(
  userLoginInput: LoginUserInput
): Promise<LoginResponse> {
  return api.post(`/login`, userLoginInput);
}

export async function sendContactForm(
  dataForm: ContactForm
): Promise<GeneralResponse> {
  return api.post('/contact_form', dataForm);
}
