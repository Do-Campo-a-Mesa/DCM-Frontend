import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const ContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    pt: '3em',
    pb: '3em',
    backgroundColor: Theme.customPalette.primary.main,
    textAlign: 'left',
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };
  const ContainerStyle1 = {
    display: 'flex',
    justifyContent: 'center',
    pt: '1em',
    pb: '3em',
    backgroundColor: Theme.customPalette.primary.background,
    textAlign: 'left',
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };
  const ContainerStyle2 = {
    display: 'flex',
    justifyContent: 'center',
    pt: '3em',
    pb: '3em',
    backgroundColor: Theme.status.success.secondary,
    textAlign: 'left',
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };
  const GridStyle2 = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '3em',
    paddingRight: '3em',
    '@media (max-width: 900px)': {
      flexDirection: 'row-reverse',
    },
  };
  const SectionTitleStyle = {
    typography: Theme.customTypography.h3,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.black,
    textAlign: 'center',
    mt: '1em',
    '@media (max-width: 600px)': {
      typography: Theme.customTypography.h4,
    },
  };
  const TextBodyStyle = {
    typography: Theme.customTypography.body2,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.black,
    textAlign: 'left',
  };
  const IndicatorStyle = {
    typography: Theme.customTypography.body3,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.black,
    textAlign: 'left',
    pb: 2,
  };
  const SmallFooterStyles = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
  };
  const BigFooterStyles = {
    backgroundColor: Theme.customPalette.primary.background,
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
  const GridImgStyle1 = {
    display: 'flex',
    justifyContent: 'start',
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
    ContainerStyle1,
    ContainerStyle2,
    SectionTitleStyle,
    TextBodyStyle,
    IndicatorStyle,
    GridImgStyle1,
    GridStyle2,
  };
};
