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
  const Subtitle = {
    pt: 2,
    typography: Theme.customTypography.h7,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.black,
    textTransform: 'uppercase',
    mb: 2,
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  };
  const ContainerStyle = {
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
  };
  const GridStyle = {
    direction: 'row',
    justifyContent: 'center',
    pt: 5,
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
  const FilterTypeStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h6,
    color: Theme.customPalette.primary.black,
    pt: 1,
  };
  const FilterAccordionStyle = {
    mr: 2,
    backgroundColor: Theme.customPalette.primary.background,
  };

  return {
    Theme,
    Title,
    ContainerStyle,
    GridStyle,
    Subtitle,
    SmallFooterStyle,
    FilterTypeStyle,
    FilterAccordionStyle,
  };
};
