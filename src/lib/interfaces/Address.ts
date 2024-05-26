export interface Address {
  id: string;
  userId: string;
  apelido: string;
  cep: string;
  rua: string;
  numero: string;
  cidade: string;
  estado: string;
  bairro: string;
  complemento?: string;
}
export interface AddressResponse {
  data: Address[];
}
