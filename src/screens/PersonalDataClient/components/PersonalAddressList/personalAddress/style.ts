import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const BodyAddress = {
    color: Theme.customPalette.primary.black,
    typography: Theme.customTypography.body4,
    fontFamily: Theme.customTypography.fontFamily,
    mr: '2em',
  };
  const Button = {
    backgroundColor: Theme.customPalette.primary.main,
    color: Theme.customPalette.primary.background,
    typography: Theme.customTypography.h8,
    fontFamily: Theme.customTypography.fontFamily,
    lineHeight: '1.75',
    mt: '1em',
    '&:hover': {
      backgroundColor: Theme.customPalette.secondary.main,
      color: Theme.customPalette.primary.background,
    },
  };
  const Card = {
    backgroundColor: Theme.customPalette.primary.background,
    border: '1px solid',
    borderColor: Theme.customPalette.neutral.inactive,
  };
  const TextFieldStyle = {
    pb: '1em',
    '& .MuiInputBase-root': {
      borderRadius: '10px',
      color: Theme.customPalette.primary.black,
      typography: Theme.customTypography.body4,
      fontFamily: Theme.customTypography.fontFamily,
      flexBasis: '100%',
      maxWidth: '100%',
      '@media (max-width: 600px)': {
        height: '4vh',
        typography: Theme.customTypography.h8,
      },

      '& fieldset': {
        border: '1px solid',
        borderColor: Theme.customPalette.neutral.inactive,
      },
      '&.Mui-focused fieldset': {
        borderColor: Theme.customPalette.primary.main,
      },
    },
    '& .MuiFormLabel-root': {
      typography: Theme.customTypography.body3,
      fontFamily: Theme.customTypography.fontFamily,
      '&.Mui-focused': {
        typography: Theme.customTypography.body3,
        fontFamily: Theme.customTypography.fontFamily,
        color: Theme.customPalette.primary.main,
      },
    },
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h4,
    color: Theme.customPalette.primary.black,
    pb: '1em',
  };
  const TitleAddress = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h5,
    color: Theme.customPalette.primary.black,
    textTransform: 'capitalize',
    pb: '0.5em',
  };
  return {
    BodyAddress,
    Button,
    Card,
    TextFieldStyle,
    Title,
    TitleAddress,
    Theme,
  };
};
