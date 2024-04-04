import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const ContainerStyle = {
    pt: '3em',
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const SmallFooterStyles = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
  };
  const BigFooterStyles = {
    backgroundColor: Theme.customPalette.neutral.boards,
    display: 'flex',
    justifyContent: 'center',
    pt: '4em',
    pb: '4em',
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h3,
    color: Theme.customPalette.primary.background,
  };
  const SubTitle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.subtitle1,
    color: Theme.customPalette.primary.background,
  };
  const GridStyle = {
    direction: 'row',
    justifyContent: 'center',
  };

  const GridTitle = {
    display: 'flex',
    justifyContent: 'center',
  };
  const GridSubTitle = {
    textAlign: 'center',
  };
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
      typography: Theme.customTypography.h7,
      fontFamily: Theme.customTypography.fontFamily,
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
      color: Theme.customPalette.neutral.inactive,
      '&.Mui-focused': {
        color: Theme.customPalette.primary.yellow,
      },
    },
  };
  return {
    Theme,
    ContainerStyle,
    SmallFooterStyles,
    BigFooterStyles,
    ButtonStyle,
    Title,
    SubTitle,
    GridStyle,
    GridTitle,
    GridSubTitle,
    TextFieldStyle,
  };
};
