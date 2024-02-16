import partners from '../../tests/mock/partners/index.json';

export async function getHomePagePartners() {
  return { data: partners };
}
