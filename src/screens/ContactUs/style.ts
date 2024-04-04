import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const ContainerStyle = {
    pt: '3em',
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
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
  const SubTitle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.subtitle1,
    color: Theme.customPalette.primary.background,
  };
  const GridStyle = {
    direction: 'row',
    justifyContent: 'center',
    pt: 2,
  };

  const GridTitle = {
    display: 'flex',
    justifyContent: 'center',
  };
  const GridSubTitle = {
    textAlign: 'center',
  };
  const ButtonStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.button,
    color: Theme.customPalette.primary.black,
    backgroundColor: Theme.customPalette.primary.yellow,
    border: 1,
    borderColor: Theme.customPalette.primary.main,
    mb: 4,
    mt: 2,
    '&:hover': {
      backgroundColor: Theme.customPalette.secondary.main,
      color: Theme.customPalette.primary.background,
    },
  };
  return {
    Theme,
    ContainerStyle,
    SmallFooterStyles,
    BigFooterStyles,
    ButtonStyle,
    Title,
    SubTitle,
    GridStyle,
    GridTitle,
    GridSubTitle,
  };
};
