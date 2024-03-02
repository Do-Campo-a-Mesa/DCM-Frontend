import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const cardStyle = {
    border: 1,
    borderRadius: 1,
    borderColor: theme.customPalette.neutral.inactive,
    pr: 1,
    pl: 1,
    mr: 5,
    mt: 1,
    backgroundColor: theme.customPalette.primary.background,
  };
  const sliderStyle = {
    '& .MuiSlider-track': {
      color: theme.customPalette.primary.main,
    },
    '& .MuiSlider-thumb': {
      color: theme.customPalette.primary.main,
    },
  };
  return { theme, cardStyle, sliderStyle };
};
