import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const fontStyle = {
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h9,
    color: theme.customPalette.neutral.secondaryText,
  };
  return {
    fontStyle,
  };
};
