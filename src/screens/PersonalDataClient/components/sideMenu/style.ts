import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();

  const Content = {
    minHeight: '100vh',
    backgroundColor: Theme.customPalette.primary.main,
    display: 'flex',
    justifyContent: 'center',

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
  const ContainerStyle = {
    //backgroundColor: Theme.customPalette.primary.background,
    p: '3em',
  };
  const ListStyle = {
    pt: '3em',
    color: Theme.customPalette.primary.background,
    '& .MuiListItemText-primary': {
      fontFamily: Theme.customTypography.fontFamily,
      typography: Theme.customTypography.button1,
      textTransform: 'uppercase',
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
    ContainerStyle,
    Content,
    Item,
    ListStyle,
    Theme,
    Title,
    SmallFooterStyle,
  };
};
