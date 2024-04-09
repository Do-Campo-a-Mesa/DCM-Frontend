import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const TitleStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h6,
    color: Theme.customPalette.primary.background,
  };
  const DescriptionStyle = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.body4,
    color: Theme.customPalette.primary.black,
  };
  const AccordionStyle = {
    '&:first-of-type': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '&:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    position: 'unset',

    backgroundColor: Theme.customPalette.primary.background,
    borderRadius: '10px',
    mb: '1em',
  };
  const AccordionStyle1 = {
    borderRadius: '10px',
    p: '0.5em 3em 0.5em 3em',
    backgroundColor: Theme.customPalette.primary.main,
  };
  const AccordionDetailStyle = {
    p: '2em 3em 3em 3em',
    border: '1px solid',
    borderColor: Theme.customPalette.primary.main,
    borderRadius: '10px',
  };
  const IconStyle = {
    color: Theme.customPalette.primary.background,
  };
  return {
    Theme,
    TitleStyle,
    DescriptionStyle,
    AccordionStyle,
    AccordionStyle1,
    AccordionDetailStyle,
    IconStyle,
  };
};
