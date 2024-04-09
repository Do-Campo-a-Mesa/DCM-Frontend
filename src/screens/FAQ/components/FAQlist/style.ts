import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const TitleStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h6,
    color: Theme.customPalette.primary.black,
  };
  const DescriptionStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.body3,
    color: Theme.customPalette.primary.black,
  };
  return {
    Theme,
    TitleStyle,
    DescriptionStyle,
  };
};
