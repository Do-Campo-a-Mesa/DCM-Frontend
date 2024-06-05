import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const Content = {
    display: 'flex',
    justifyContent: 'center',
    p: '0',
    '@media (min-width: 1200px)': {
      maxWidth: '1600px',
    },
    '@media (min-width: 600px)': {
      p: '0',
    },
  };

  const ContainerStyle = {
    p: '3em',
  };

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

  return {
    ContainerStyle,
    Content,
    Theme,
    SmallFooterStyle,
  };
};
