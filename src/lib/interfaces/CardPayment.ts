import { Address } from './Address';

export interface CardPayment {
  id: string;
  apelido: string;
  cpf: string;
  numero: string;
  nome: string;
  validade: string;
  codigo: string;
  endereco: Address;
}

export interface CardPaymentResponse {
  data: CardPayment[];
}
