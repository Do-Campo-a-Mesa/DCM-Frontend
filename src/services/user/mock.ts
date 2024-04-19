import { GeneralResponse, LoginResponse } from '../../lib/interfaces/User';
import user_login_response from '../../tests/mock/user/user_login_response.json';

export async function createUserAccount(): Promise<GeneralResponse> {
  return {
    data: { message: 'Cadastro de Usuário realizado com sucesso' },
    status: 201,
  };
}

export async function userLogIn(): Promise<LoginResponse> {
  return user_login_response;
}

export async function sendContactForm(): Promise<GeneralResponse> {
  return {
    data: { message: 'Formulário de Contato enviado com Sucesso' },
    status: 200,
  };
}
