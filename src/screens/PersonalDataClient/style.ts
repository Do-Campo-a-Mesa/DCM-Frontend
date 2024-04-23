import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const Title = {
    typography: Theme.customTypography.h4,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.black,
    textTransform: 'uppercase',
    '@media (max-width: 600px)': {
      typography: Theme.customTypography.h4,
      mt: 2,
      textAlign: 'center',
    },
  };

  const SmallFooterStyle = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };

  return {
    Theme,
    Title,
    SmallFooterStyle,
  };
};
