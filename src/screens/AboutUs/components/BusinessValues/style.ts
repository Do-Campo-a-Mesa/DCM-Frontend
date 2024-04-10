import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();

  const CardStyle = {
    display: 'flex',
    justifyContent: 'center',
    p: 2,
    border: 1,
    borderColor: Theme.customPalette.primary.main,
    backgroundColor: Theme.customPalette.primary.background,
    mb: 2,
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
  };
  const BoxStyle = {
    display: 'flex',
    alignItems: 'center',
    p: 1,
  };
  const BoxStyle2 = {
    display: 'flex',
    flexDirection: 'column',
  };
  const CardContentStyle = { flex: '1 0 auto' };
  const TitleCompanyStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h5,
    color: Theme.customPalette.primary.black,
    '@media (max-width: 600px)': {
      typography: Theme.customTypography.h6,
    },
  };
  return {
    Theme,
    CardStyle,
    BoxStyle,
    BoxStyle2,
    CardContentStyle,
    TitleCompanyStyle,
  };
};
