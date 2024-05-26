import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const BodyAddress = {
    color: Theme.customPalette.primary.black,
    typography: Theme.customTypography.body4,
    fontFamily: Theme.customTypography.fontFamily,
    pb: '1em',
  };
  const Button = {
    backgroundColor: Theme.customPalette.primary.main,
    color: Theme.customPalette.primary.background,
    typography: Theme.customTypography.h8,
    fontFamily: Theme.customTypography.fontFamily,
    m: '0.5em',
    '&:hover': {
      backgroundColor: Theme.customPalette.secondary.main,
      color: Theme.customPalette.primary.background,
    },
  };
  const Subtitle = {
    color: Theme.customPalette.primary.black,
    typography: Theme.customTypography.h5,
    fontFamily: Theme.customTypography.fontFamily,
    mb: '0.5em',
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h4,
    color: Theme.customPalette.primary.black,
    pb: '1em',
  };
  return {
    BodyAddress,
    Button,
    Subtitle,
    Title,
    Theme,
  };
};
