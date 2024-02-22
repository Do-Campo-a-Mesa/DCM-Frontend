import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    mb: 2,
  };
  const tabStyle = {
    color: theme.customPalette.neutral.inactive,
    typography: theme.customTypography.h6,
    fontFamily: theme.customTypography.fontFamily,
    textTransform: 'capitalize',
    '&.Mui-selected': {
      color: theme.customPalette.primary.main,
    },
  };
  return { boxStyle, tabStyle, theme };
};
