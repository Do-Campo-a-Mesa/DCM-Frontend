import { api } from '../api';
import {
  CreateUserInput,
  GeneralResponse,
  LoginResponse,
  LoginUserInput,
} from '../../lib/interfaces/User';

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
