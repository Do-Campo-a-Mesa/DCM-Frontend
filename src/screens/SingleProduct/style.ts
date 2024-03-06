import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
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
  const ContainerStyle = {
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
  };
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
  return {
    Theme,
    SmallFooterStyle,
    ContainerStyle,
    Title,
  };
};
