import { useTheme } from '@mui/material/styles';

export const useCustomStyles = () => {
  const Theme = useTheme();
  const Accordion = {
    backgroundColor: Theme.customPalette.primary.background,
    boxShadow: 'none',
    border: '1px solid',
    borderColor: Theme.customPalette.neutral.inactive,
    mt: '1.5em',
    p: '0',
  };
  const AccordionSummary = {
    backgroundColor: Theme.customPalette.neutral.boards,
    boxShadow: 'none',
    p: '1.5em',
  };
  const AccordionDetails = {
    p: '1.5em',
  };
  const Button = {
    backgroundColor: Theme.customPalette.primary.main,
    color: Theme.customPalette.primary.background,
    border: '1px solid',
    borderColor: Theme.customPalette.primary.main,
    typography: Theme.customTypography.h8,
    fontFamily: Theme.customTypography.fontFamily,
    lineHeight: '1.75',
    m: '0.5em',
    '&:hover': {
      backgroundColor: Theme.customPalette.primary.main,
      color: Theme.customPalette.primary.background,
      borderColor: Theme.customPalette.primary.main,
    },
  };
  const Button1 = {
    backgroundColor: Theme.customPalette.primary.background,
    color: Theme.customPalette.primary.main,
    border: '1px solid',
    borderColor: Theme.customPalette.primary.main,
    typography: Theme.customTypography.h8,
    fontFamily: Theme.customTypography.fontFamily,
    lineHeight: '1.75',
    m: '0.5em',
    '&:hover': {
      backgroundColor: Theme.customPalette.primary.main,
      color: Theme.customPalette.primary.background,
      borderColor: Theme.customPalette.primary.main,
    },
  };
  const ContainerStyle = {
    p: '3em',
  };
  const Content = {
    //backgroundColor: Theme.customPalette.primary.main,
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
  const Label = {
    typography: Theme.customTypography.body3,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.black,
    lineHeight: 'none',
    mr: '0.3em',
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
  const Subtitle = {
    color: Theme.customPalette.primary.black,
    typography: Theme.customTypography.h5,
    fontFamily: Theme.customTypography.fontFamily,
    mb: '0.5em',
  };
  const Text = {
    typography: Theme.customTypography.body4,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.primary.black,
    lineHeight: 'none',
    textAlign: 'center',
  };
  const Text1 = {
    typography: Theme.customTypography.body4,
    fontFamily: Theme.customTypography.fontFamily,
    color: Theme.customPalette.neutral.secondaryText,
    lineHeight: 'none',
  };
  const Title = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h4,
    color: Theme.customPalette.primary.black,
    mt: '0.5em',
  };
  const Title1 = {
    fontFamily: Theme.customTypography.fontFamily,
    typography: Theme.customTypography.h7,
    color: Theme.customPalette.primary.black,
    pt: '1em',
  };
  return {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Button1,
    ContainerStyle,
    Content,
    Label,
    SmallFooterStyle,
    Subtitle,
    Text,
    Text1,
    Title,
    Title1,
    Theme,
  };
};
