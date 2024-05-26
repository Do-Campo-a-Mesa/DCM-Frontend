import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const Button = {
    backgroundColor: Theme.customPalette.primary.background,
    color: Theme.customPalette.primary.main,
    borderColor: Theme.customPalette.primary.main,
    typography: Theme.customTypography.h8,
    fontFamily: Theme.customTypography.fontFamily,
    lineHeight: '1.75',
    m: '0.5em',
    '&:hover': {
      backgroundColor: Theme.customPalette.primary.main,
      color: Theme.customPalette.primary.background,
      borderColor: Theme.customPalette.primary.main,
    },
  };
  const ContainerStyle = {
    p: '3em',
  };
  const Content = {
    display: 'flex',
    justifyContent: 'center',
    p: '0',
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
    '@media (min-width: 600px)': {
      p: '0',
    },
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h4,
    color: Theme.customPalette.primary.black,
    pb: '1em',
  };
  return {
    Button,
    ContainerStyle,
    Content,
    Title,
    Theme,
  };
};
