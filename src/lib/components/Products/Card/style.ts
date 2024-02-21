import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();

  const cardStyle = {
    textAlign: 'center',
    pt: 3,
    border: 1,
    borderColor: theme.customPalette.neutral.inactive,
    backgroundColor: theme.customPalette.primary.background,
    mb: 2,

    '&:hover': {
      borderColor: theme.customPalette.primary.main,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
  };
  const cardContentStyle = { flex: '1 0 auto' };
  const titleCompanyStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h5,
    color: theme.customPalette.primary.black,
    '@media (max-width: 600px)': {
      typography: theme.customTypography.h6,
    },
  };
  const titlePartnerStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h6,
    color: theme.customPalette.neutral.secondaryText,
    mb: 2,
  };
  const titlePriceStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h4,
    color: theme.customPalette.primary.black,
    pt: 1,
  };
  const wishlistGridStyle = {
    textAlign: 'right',
    pr: 3,
  };
  const wishlistButtonStyle = {
    color: theme.customPalette.primary.main,
  };
  const buttonStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.button,
    color: theme.customPalette.primary.main,
    backgroundColor: theme.customPalette.primary.background,
    border: 1,
    borderColor: theme.customPalette.primary.main,
    mb: 4,
    '&:hover': {
      backgroundColor: theme.customPalette.primary.main,
      color: theme.customPalette.primary.background,
    },
  };
  return {
    cardStyle,
    cardContentStyle,
    titleCompanyStyle,
    titlePartnerStyle,
    titlePriceStyle,
    wishlistGridStyle,
    wishlistButtonStyle,
    buttonStyle,
  };
};
