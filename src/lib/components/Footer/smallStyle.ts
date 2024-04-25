import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();

  const copyright = {
    backgroundColor: theme.customPalette.neutral.boards,
    typography: theme.customTypography.subtitle2,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.primary.black,
    p: 2,
    textAlign: 'center',
  };
  return {
    copyright,
  };
};
