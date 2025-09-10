import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const Accordion = {
    backgroundColor: Theme.customPalette.primary.background,
    border: '1px solid',
    borderColor: Theme.customPalette.neutral.inactive,
  };
  const Button = {
    backgroundColor: Theme.customPalette.primary.background,
    color: Theme.customPalette.primary.main,
    border: '1px solid',
    borderColor: Theme.customPalette.primary.main,
    typography: Theme.customTypography.h8,
    fontFamily: Theme.customTypography.fontFamily,
    lineHeight: '1.75',
    m: '0.5em',
    '&:hover': {
      backgroundColor: Theme.customPalette.primary.main,
      color: Theme.customPalette.primary.background,
      borderColor: Theme.customPalette.primary.main,
    },
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h4,
    color: Theme.customPalette.primary.black,
    pb: '1em',
  };
  return {
    Accordion,
    Button,
    Title,
    Theme,
  };
};
