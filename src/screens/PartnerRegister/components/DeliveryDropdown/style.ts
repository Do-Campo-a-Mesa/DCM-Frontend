import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const ChipLabel = {
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.yellow,
    typography: Theme.customTypography.h8,
  };
  return {
    Theme,
    ChipLabel,
  };
};
