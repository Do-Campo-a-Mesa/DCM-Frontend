import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const SmallFooterStyles = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h3,
    color: Theme.customPalette.primary.background,
  };
  const Title1 = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h3,
    color: Theme.customPalette.primary.black,
  };
  const SubTitle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.subtitle1,
    color: Theme.customPalette.primary.background,
  };
  const SubTitle1 = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.subtitle1,
    color: Theme.customPalette.primary.black,
  };
  const ButtonStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.button1,
    color: Theme.status.warning.secondary,
    textDecoration: 'underline',
    '&:hover': {
      color: Theme.customPalette.primary.yellow,
    },
  };
  const ContainerStyle = {
    minHeight: '100vh',
  };
  const FormContainer = {
    backgroundColor: Theme.customPalette.primary.main,
    display: 'flex',
    justifyContent: 'center',
  };
  const FormContainer1 = {
    backgroundColor: Theme.customPalette.primary.background,
    display: 'flex',
    justifyContent: 'center',
  };
  const FormGrid = {
    pt: '8em',
  };
  const InfoContainer = {};
  return {
    Theme,
    ContainerStyle,
    SmallFooterStyles,
    Title,
    Title1,
    SubTitle,
    SubTitle1,
    FormContainer,
    FormContainer1,
    InfoContainer,
    ButtonStyle,
    FormGrid,
  };
};
