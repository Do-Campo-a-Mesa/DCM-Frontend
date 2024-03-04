import { useTheme } from '@mui/material/styles';

export const useCustomStyles = (isHomePage?: boolean) => {
  const theme = useTheme();

  const textFieldStyle = {
    '& .MuiInputBase-root': {
      backgroundColor: 'rgba(229, 255, 233, 0.1)',
      borderRadius: '20px',
      borderColor: theme.customPalette.primary.main,
      color: isHomePage
        ? theme.customPalette.primary.background
        : theme.customPalette.primary.black,
      typography: theme.customTypography.h7,
      fontFamily: theme.customTypography.fontFamily,
      height: '5vh',
      '@media (max-width: 600px)': {
        height: '4vh',
        typography: theme.customTypography.h8,
      },

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
        '@media (max-width: 600px)': {
          opacity: 1,
          color: theme.customPalette.neutral.inactive,
          typography: theme.customTypography.h8,
        },
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
    height: '2vh',
    width: '2vh',
    '@media (max-width: 600px)': {
      height: '1.5vh',
      width: '1.5vh',
    },

    color: theme.customPalette.primary.background,
    '&hover': {
      color: theme.customPalette.primary.background,
    },
  };

  return { textFieldStyle, inputStyle, searchIconStyle };
};
