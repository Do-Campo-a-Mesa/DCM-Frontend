import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h3,
    color: Theme.customPalette.primary.black,
  };
  const SubTitle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.subtitle1,
    color: Theme.customPalette.neutral.secondaryText,
  };
  const FormContainer = {
    mt: '10em',
    display: 'flex',
    justifyContent: 'center',
  };
  const ImageContainer = {
    display: 'flex',
    justifyContent: 'right',
  };
  const SmallFooterStyles = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
  };
  return {
    Theme,
    Title,
    SubTitle,
    SmallFooterStyles,
    FormContainer,
    ImageContainer,
  };
};
