import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const ContainerStyle = {
    pt: '3em',
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
  };
  return {
    Theme,
    ContainerStyle,
  };
};
