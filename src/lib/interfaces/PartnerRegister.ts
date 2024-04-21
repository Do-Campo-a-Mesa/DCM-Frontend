import { DeliveryOption } from './DeliveryOptions';

export interface PartnerForm {
  nomeEmpresa: string;
  nomeFantasia: string;
  cnpj: number;
  email: string;
  telefone: string;
  instagram: string;
  cep: number;
  rua: string;
  numero: number;
  cidade: string;
  bairro: string;
  estado:
    | 'AC'
    | 'AL'
    | 'AP'
    | 'AM'
    | 'BA'
    | 'CE'
    | 'DF'
    | 'ES'
    | 'GO'
    | 'MA'
    | 'MT'
    | 'MS'
    | 'MG'
    | 'PA'
    | 'PB'
    | 'PR'
    | 'PE'
    | 'PI'
    | 'RJ'
    | 'RN'
    | 'RS'
    | 'RO'
    | 'RR'
    | 'SC'
    | 'SP'
    | 'SE'
    | 'TO';
  complemento: string;
  entrega: boolean;
  entregaTipo: DeliveryOption[];
  entregaDias: boolean[];
  tempoProcessamento: number;
}
