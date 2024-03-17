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
    pt: '3em',
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
  const GridContainerStyle = {
    pt: '10em',
  };
  const WishlistGridStyle = {
    p: 0,
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
  };
  const WishlistButtonStyle = {
    color: Theme.customPalette.primary.main,
    p: 0,
  };
  const GridTitle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };
  const GridInfoProduct = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& .Mui-Typography-root': {
      m: 2,
    },
  };
  const RatingStyle = {
    textAlign: 'Right',
  };
  const GridTabsStyle = {
    mb: 10,
  };
  const TabStyle = {
    color: Theme.customPalette.neutral.inactive,
    typography: Theme.customTypography.body4,
    fontFamily: Theme.customTypography.fontFamily,
    '&.Mui-selected': {
      color: Theme.customPalette.primary.main,
    },
  };
  return {
    Theme,
    SmallFooterStyle,
    ContainerStyle,
    Title,
    GridContainerStyle,
    WishlistButtonStyle,
    WishlistGridStyle,
    GridTitle,
    GridInfoProduct,
    RatingStyle,
    GridTabsStyle,
    TabStyle,
  };
};
