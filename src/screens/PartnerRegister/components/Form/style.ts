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
    '&:hover': {
      backgroundColor: Theme.customPalette.primary.yellow,
      color: Theme.customPalette.primary.black,
    },
  };
  const ButtonStyle1 = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.button1,
    color: Theme.status.warning.secondary,
    textDecoration: 'underline',
    '&:hover': {
      color: Theme.customPalette.primary.yellow,
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
  const LabelOptions = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.body4,
    color: Theme.customPalette.primary.background,
    pt: 2,
    textDecoration: 'none',

    '&.Mui-focused': {
      color: Theme.customPalette.primary.background,
    },
  };
  const RadioOptions = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.body4,
    color: Theme.customPalette.primary.background,
    pt: 1,

    '.MuiButtonBase-root': {
      color: Theme.customPalette.primary.background,
      '&.Mui-checked': {
        color: Theme.customPalette.primary.yellow,
      },
    },
    '&.Mui-checked': {
      color: Theme.customPalette.primary.yellow,
    },
  };
  return {
    Theme,
    ButtonStyle,
    ButtonStyle1,
    TextFieldStyle,
    LabelStep,
    LabelOptions,
    RadioOptions,
  };
};
