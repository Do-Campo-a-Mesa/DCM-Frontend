import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const theme = useTheme();

  const item = {
    textAlign: 'left',
    padding: theme.spacing(2),
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  };
  const icons = {
    color: theme.customPalette.primary.main,
    '& .css-i4bv87-MuiSvgIcon-root': {
      fontSize: '2rem',
    },
  };
  const titleStyle = {
    color: theme.customPalette.primary.black,
    pb: 2,
    fontFamily: theme.customTypography.fontFamily,
    typography: theme.customTypography.body3,
  };
  const gridLinkStyle = {
    pt: 1,
  };
  const linkStyle = {
    typography: theme.customTypography.body4,
    fontFamily: theme.customTypography.fontFamily,
    color: theme.customPalette.neutral.secondaryText,
    textDecoration: 'none',
    '&:hover': {
      color: theme.customPalette.primary.main,
    },
  };

  return {
    item,
    icons,
    titleStyle,
    gridLinkStyle,
    linkStyle,
  };
};
