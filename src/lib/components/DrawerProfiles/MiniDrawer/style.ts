import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const MiniDrawerProfile = {
    '& .MuiDrawer-paper': {
      position: 'relative',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 0,
      backgroundColor: Theme.customPalette.primary.main,
    },
    '& .MuiTypography-root': {
      fontFamily: Theme.customTypography.fontFamily,
      typography: Theme.customTypography.button1,
      textTransform: 'uppercase',
      color: Theme.customPalette.primary.background,
    },
    '& .MuiSvgIcon-root': {
      fill: Theme.customPalette.primary.background,
    },
  };
  return {
    MiniDrawerProfile,
    Theme,
  };
};
