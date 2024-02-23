import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const buttonStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.button,
    color: theme.customPalette.primary.background,
    backgroundColor: theme.customPalette.primary.main,
    border: 1,
    mb: 4,
    pr: 2,
    pl: 2,
    pb: 1,
    pt: 1,
    '&:hover': {
      color: theme.customPalette.primary.background,
      backgroundColor: theme.customPalette.secondary.main,
      borderColor: theme.customPalette.primary.main,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
  };
  const gridButtonStyle = {
    textAlign: 'center',
  };
  const paginationStyle = {
    mb: 10,
    display: 'flex',
    justifyContent: 'center',
  };
  return {
    buttonStyle,
    theme,
    gridButtonStyle,
    paginationStyle,
  };
};
