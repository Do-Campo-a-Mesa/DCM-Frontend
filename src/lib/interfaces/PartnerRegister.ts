import { DeliveryOption } from './DeliveryOptions';

export interface PartnerForm {
  nomeEmpresa: string;
  nomeFantasia: string;
  cnpj: string;
  email: string;
  telefone: string;
  instagram: string;
  cep: string;
  rua: string;
  numero: number;
  cidade: string;
  bairro: string;
  estado: string;
  complemento: string;
  entrega: boolean;
  entregaTipo: DeliveryOption[];
  entregaDias: boolean[];
  tempoProcessamento: number;
}
