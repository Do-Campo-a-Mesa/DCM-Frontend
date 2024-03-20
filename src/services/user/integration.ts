import { api } from '../api';
import { CreateUserInput, GeneralResponse } from '../../lib/interfaces/User';

export async function createUserAccount(
  createUserInput: CreateUserInput
): Promise<GeneralResponse> {
  return api.post(`/user`, createUserInput);
}
