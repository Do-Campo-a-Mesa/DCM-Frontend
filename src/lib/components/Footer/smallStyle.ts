import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();

  const copyright = {
    backgroundColor: theme.customPalette.primary.main,
    Typography: theme.customTypography.body4,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.background,
    p: 2,
    textAlign: 'center',
  };
  return {
    copyright,
  };
};
