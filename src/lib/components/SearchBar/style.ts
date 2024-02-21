import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();

  const textFieldStyle = {
    '& .MuiInputBase-root': {
      backgroundColor: 'rgba(229, 255, 233, 0.1)',
      borderRadius: '20px',
      borderColor: theme.customPalette.primary.main,
      color: theme.customPalette.primary.background,
      typography: theme.customTypography.h7,
      fontFamily: theme.customTypography.fontFamily,
      '&:hover fieldset': {
        borderColor: theme.customPalette.secondary.main,
      },
      '& fieldset': {
        border: '2px solid',
        borderColor: theme.customPalette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.customPalette.secondary.main,
      },
    },
    '& .MuiInputBase-input': {
      '&::placeholder': {
        opacity: 1,
        color: theme.customPalette.neutral.inactive,
        typography: theme.customTypography.h7,
      },
    },
  };

  const inputStyle = {
    '& .MuiButtonBase-root': {
      border: '2px solid',
      borderColor: theme.customPalette.primary.main,
      backgroundColor: theme.customPalette.primary.main,
      '&:hover': {
        backgroundColor: theme.customPalette.secondary.main,
      },
    },
  };

  const searchIconStyle = {
    color: theme.customPalette.primary.background,
    '&hover': {
      color: theme.customPalette.primary.background,
    },
  };

  return { textFieldStyle, inputStyle, searchIconStyle };
};
