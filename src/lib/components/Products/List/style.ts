import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const buttonStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.button,
    color: theme.customPalette.primary.main,
    backgroundColor: theme.customPalette.primary.background,
    border: 1,
    borderColor: theme.customPalette.primary.main,
    mb: 4,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.customPalette.primary.main,
      color: theme.customPalette.primary.background,
    },
  };

  return {
    buttonStyle,
  };
};
