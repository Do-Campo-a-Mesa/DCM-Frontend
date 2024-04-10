import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();

  const ButtonStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.button,
    color: Theme.customPalette.primary.black,
    backgroundColor: Theme.status.warning.secondary,
    border: 1,
    borderColor: Theme.customPalette.primary.main,
    mb: 4,
    mt: 2,
    '&:hover': {
      backgroundColor: Theme.customPalette.primary.yellow,
      color: Theme.customPalette.primary.black,
    },
  };
  const TextFieldStyle = {
    '& .MuiInputBase-root': {
      borderRadius: '10px',
      color: Theme.customPalette.primary.background,
      typography: Theme.customTypography.h7,
      fontFamily: Theme.customTypography.fontFamily,
      flexBasis: '100%',
      maxWidth: '100%',
      '@media (max-width: 600px)': {
        height: '4vh',
        typography: Theme.customTypography.h8,
      },

      '&:hover fieldset': {
        borderColor: Theme.customPalette.primary.yellow,
      },
      '& fieldset': {
        border: '1px solid',
        borderColor: Theme.customPalette.primary.background,
      },
      '&.Mui-focused fieldset': {
        borderColor: Theme.customPalette.primary.yellow,
      },
    },
    '& .MuiFormLabel-root': {
      typography: Theme.customTypography.h6,
      fontFamily: Theme.customTypography.fontFamily,
      color: Theme.customPalette.neutral.inactive,
      '&.Mui-focused': {
        typography: Theme.customTypography.h7,
        fontFamily: Theme.customTypography.fontFamily,
        color: Theme.customPalette.primary.yellow,
      },
    },
  };
  const LabelStep = {
    '.MuiStepLabel-label': {
      fontFamily: Theme.customTypography.fontFamily,
      typography: Theme.customTypography.h9,
      color: Theme.customPalette.primary.black,
      '&.Mui-completed': {
        fontFamily: Theme.customTypography.fontFamily,
        typography: Theme.customTypography.button1,
        color: Theme.customPalette.primary.black,
      },
    },
    '.MuiStepIcon-root': {
      color: Theme.customPalette.primary.black,
      '&.Mui-active': {
        color: Theme.customPalette.primary.yellow,
        '.MuiStepIcon-text': {
          fill: Theme.customPalette.primary.black,
        },
      },
      '&.Mui-completed': {
        color: Theme.customPalette.primary.black,
      },
      '.MuiStepIcon-text': {
        fontFamily: Theme.customTypography.fontFamily,
        typography: Theme.customTypography.h9,
        color: Theme.customPalette.primary.black,
      },
    },
  };
  return {
    Theme,
    ButtonStyle,
    TextFieldStyle,
    LabelStep,
  };
};
