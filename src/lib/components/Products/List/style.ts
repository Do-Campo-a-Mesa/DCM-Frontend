import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const buttonStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.button,
    color: theme.customPalette.primary.background,
    backgroundColor: theme.customPalette.primary.main,
    border: 1,
    mb: 4,
    pr: 2,
    pl: 2,
    pb: 1,
    pt: 1,
    '&:hover': {
      color: theme.customPalette.primary.background,
      backgroundColor: theme.customPalette.secondary.main,
      borderColor: theme.customPalette.primary.main,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    },
  };
  const gridButtonStyle = {
    textAlign: 'center',
  };
  const paginationStyle = {
    mb: 10,
    display: 'flex',
    justifyContent: 'center',
  };
  const sortFontStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h6,
    color: theme.customPalette.primary.black,
  };
  const selectStyle = {
    backgroundColor: theme.customPalette.primary.main,
    color: theme.customPalette.primary.background,
    borderColor: theme.customPalette.primary.main,
    borderRadius: '15px',
    '& .MuiSelect-icon': {
      color: theme.customPalette.primary.background,
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.customPalette.primary.main,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.customPalette.primary.main,
      //backgroundColor: ' rgba(52, 143, 66, 0.2)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.customPalette.primary.main,
    },
  };
  return {
    buttonStyle,
    theme,
    gridButtonStyle,
    paginationStyle,
    sortFontStyle,
    selectStyle,
  };
};
