import partners from '../../tests/mock/partners/index.json';
import { PartnersResponse } from '../../lib/interfaces/Partner';
import { GeneralResponse } from '../../lib/interfaces/User';

export async function getHomePagePartners(): Promise<PartnersResponse> {
  return { data: partners };
}

export async function registerPartner(): Promise<GeneralResponse> {
  return {
    data: {
      message:
        'A solicitação de cadastro no programa de parceiros foi realizada com sucesso, em breve entraremos em contato para confirmar o vinculo com a plataforma',
    },
    status: 201,
  };
}
