import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
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
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h4,
    color: Theme.customPalette.primary.black,
    pb: '1em',
  };
  return {
    TextFieldStyle,
    Title,
    Theme,
  };
};
