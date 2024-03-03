import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const cardStyle = {
    border: 1,
    borderRadius: 1,
    borderColor: theme.customPalette.neutral.inactive,
    mr: 5,
    mt: 1,
    backgroundColor: theme.customPalette.primary.background,
  };
  const checkboxStyle = {
    '&.Mui-checked': {
      color: theme.customPalette.primary.main,
    },
  };
  const checklabelStyle = {
    '& .MuiFormControlLabel-label': {
      fontFamily: theme.customTypography.fontFamily,
      typography: theme.customTypography.body4,
      color: theme.customPalette.neutral.secondaryText,
    },
    '& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label': {
      color: theme.customPalette.primary.main,
    },
  };
  const searchStyle = {
    minWidth: '100%',
    '& .MuiInputBase-root': {
      color: theme.customPalette.primary.black,
      typography: theme.customTypography.body4,
      fontFamily: theme.customTypography.fontFamily,
      '&:hover fieldset': {
        borderColor: theme.customPalette.primary.main,
      },
      '& fieldset': {
        borderColor: theme.customPalette.neutral.inactive,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.customPalette.secondary.main,
      },
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: theme.customPalette.secondary.main,
    },
    '& .MuiFormLabel-root': {
      color: theme.customPalette.neutral.inactive,
      fontFamily: theme.customTypography.fontFamily,
      typography: theme.customTypography.body3,
    },
  };
  return { cardStyle, theme, checkboxStyle, checklabelStyle, searchStyle };
};
