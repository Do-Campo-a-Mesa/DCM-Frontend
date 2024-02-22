export const formatProductPrice = (price: number): string => {
  // Formata o preço para duas casas decimais
  const formattedPrice = price.toFixed(2);

  // Substitui o ponto por vírgula na string formatada
  const priceString = `R$ ${formattedPrice.replace('.', ',')}`;

  return priceString;
};
