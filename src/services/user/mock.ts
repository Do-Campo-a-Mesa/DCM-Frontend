import { GeneralResponse } from '../../lib/interfaces/User';

export async function createUserAccount(): Promise<GeneralResponse> {
  return { message: 'Cadastro de Usuário realizado com sucesso' };
}
