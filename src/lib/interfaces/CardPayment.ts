import { Enderecos } from './User';

export interface CardPayment {
  id: string;
  apelido: string;
  cpf: string;
  numero: string;
  nome: string;
  validade: string;
  codigo: string;
  endereco: Enderecos;
}

export interface CardPaymentResponse {
  data: CardPayment[];
}
