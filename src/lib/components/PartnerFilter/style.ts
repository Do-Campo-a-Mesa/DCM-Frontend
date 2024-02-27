import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const cardStyle = {
    border: 1,
    borderRadius: 1,
    borderColor: theme.customPalette.neutral.inactive,
    mr: 5,
    mt: 1,
    backgroundColor: theme.customPalette.primary.background,
  };
  return { cardStyle, theme };
};
