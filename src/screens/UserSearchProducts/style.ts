import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const title = {
    typography: theme.customTypography.h4,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.black,
    textTransform: 'uppercase',
    '@media (max-width: 600px)': {
      typography: theme.customTypography.h4,
      mt: 2,
      textAlign: 'center',
    },
  };
  const subtitle = {
    pt: 2,
    typography: theme.customTypography.h7,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.black,
    textTransform: 'uppercase',
    mb: 2,
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  };
  const containerStyle = {
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
  };
  const gridStyle = {
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
  const filterTypeStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h6,
    color: theme.customPalette.primary.black,
    pt: 1,
  };
  const filterAccordionStyle = {
    mr: 2,
    backgroundColor: theme.customPalette.primary.background,
  };

  return {
    theme,
    title,
    containerStyle,
    gridStyle,
    subtitle,
    SmallFooterStyle,
    filterTypeStyle,
    filterAccordionStyle,
  };
};
