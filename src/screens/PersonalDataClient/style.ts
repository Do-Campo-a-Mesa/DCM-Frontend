import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const Content = {
    //backgroundColor: Theme.customPalette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    p: '0',

    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
    '@media (min-width: 600px)': {
      p: '0',
    },
  };
  const Content1 = {
    backgroundColor: Theme.customPalette.primary.main,
    display: 'flex',
    justifyContent: 'flex-end',
    p: '0',
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
    '@media (min-width: 600px)': {
      p: '0',
    },
  };
  const Item = {
    '&.MuiGrid-item': {
      pl: '0',
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
    Content,
    Content1,
    Item,
    Theme,
    Title,
    SmallFooterStyle,
  };
};
