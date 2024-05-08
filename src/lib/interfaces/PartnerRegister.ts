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
  entregaDias: string[];
  tempoProcessamento: number;
}

export interface StoreModel {
  owner_user_id: string;
  cnpj: string;
  name: string;
  short_description: string;
  uf: string;
  city: string;
  bairro: string;
  cep: string;
  address: string;
  business_address: string;
  phone: string;
  email: string;
  instagram: string;
  minimum_order_value: number;
  minimum_value_for_free_shipping: number;
  order_processing_time: number;
  delivery_logistics: string;
}
