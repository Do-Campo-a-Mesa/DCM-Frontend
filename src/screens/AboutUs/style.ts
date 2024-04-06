import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    pt: '3em',
    pb: '3em',
    backgroundColor: 'green',
    textAlign: 'left',
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };
  const SmallFooterStyles = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
  };
  const BigFooterStyles = {
    backgroundColor: Theme.customPalette.neutral.boards,
    display: 'flex',
    justifyContent: 'center',
    pt: '4em',
    pb: '4em',
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h3,
    color: Theme.customPalette.primary.background,
  };
  const GridImgStyle = {
    display: 'flex',
    justifyContent: 'end',
    '@media (max-width: 1024px)': {
      display: 'flex',
      justifyContent: 'center',
    },
  };
  return {
    Theme,
    ContainerStyle,
    SmallFooterStyles,
    BigFooterStyles,
    Title,
    GridImgStyle,
  };
};
