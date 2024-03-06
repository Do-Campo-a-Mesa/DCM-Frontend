import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();
  const SmallFooterStyle = {
    p: 0,
    mt: 0,
    '@media (min-width: 600px)': {
      p: 0,
    },
    '@media (min-width: 1200px)': {
      maxWidth: 'none',
    },
  };
  const ContainerStyle = {
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
  };
  return {
    theme,
    SmallFooterStyle,
    ContainerStyle,
  };
};
