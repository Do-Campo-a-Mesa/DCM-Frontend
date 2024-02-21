import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();

  const appBarStyle = {
    backgroundColor: theme.customPalette.primary.background,
  };

  const boxStyle1 = {
    flexGrow: 1,
    display: { xs: 'flex', sm: 'flex', md: 'none' },
    ml: 2,
  };

  const boxStyle2 = {
    flexGrow: 1,
    display: { xs: 'none', sm: 'none', md: 'flex' },
    ml: 3,
  };
  const boxStyle3 = {
    flexGrow: 0,
    display: { xs: 'flex', sm: 'flex', md: 'none' },
    justifyContent: 'flex-end',
  };
  const boxStyle4 = {
    flexGrow: 1,
    display: { xs: 'none', sm: 'none', md: 'flex' },
    justifyContent: 'flex-end',
  };
  const iconButtonStyle = {
    color: theme.customPalette.primary.main,
  };
  const buttonStyle = {
    my: 2,
    color: theme.customPalette.primary.black,

    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h8,
    '&:hover': {
      color: theme.customPalette.primary.main,
    },
  };
  const menuStyle = {
    display: { xs: 'block', md: 'none' },
  };
  const menuItemStyle = {
    '&:hover': {
      color: theme.customPalette.primary.main,
    },
    justifyContent: 'flex-start',
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.h8,
  };
  return {
    appBarStyle,
    boxStyle1,
    boxStyle2,
    boxStyle3,
    boxStyle4,
    iconButtonStyle,
    buttonStyle,
    menuStyle,
    menuItemStyle,
  };
};
