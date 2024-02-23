// Função que recebe o nome do ícone e retorna o componente do ícone correspondente
export const getIconComponent = async (
  iconName: string
): Promise<React.ElementType | null> => {
  try {
    // Importa o ícone correspondente com base no nome fornecido
    const { default: IconComponent } = await import(
      `@mui/icons-material/${iconName}`
    );
    return IconComponent;
  } catch (error) {
    return null;
  }
};
