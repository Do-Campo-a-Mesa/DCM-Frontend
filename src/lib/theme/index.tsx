import React, { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
//import '@fontsource/roboto';

interface ThemeProps {
  children: ReactNode;
}

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      primary: {
        main: string;
        background: string;
        heavy: string;
        yellow: string;
        orange: string;
        green: string;
        blue: string;
      };
      secondary: {
        main: string;
      };
      neutral: {
        neutral900: string;
        neutral800: string;
        neutral700: string;
        neutral600: string;
        neutral500: string;
        neutral400: string;
        neutral300: string;
        neutral200: string;
        neutral100: string;
        neutral0: string;
      };
    };
    status: {
      success: {
        main: string;
        secondary: string;
        tertiary: string;
      };
      info: {
        main: string;
        background: string;
      };
      warning: {
        main: string;
        secondary: string;
        tertiary: string;
        background: string;
      };
      danger: {
        main: string;
        secondary: string;
        tertiary: string;
      };
    };
    customTypography: {
      fontFamily: string;
      h1: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h2: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h3: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h4: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h5: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h6: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h7: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      h8: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      subtitle1: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      subtitle2: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      body1: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      body2: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      body3: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      body4: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      button: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
      overline: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
      };
    };
  }

  interface ThemeOptions {
    customPalette?: {
      primary?: {
        main?: string;
        background?: string;
        heavy?: string;
        yellow?: string;
        orange?: string;
        green?: string;
        blue?: string;
      };
      secondary?: {
        main?: string;
      };
      neutral?: {
        neutral900?: string;
        neutral800?: string;
        neutral700?: string;
        neutral600?: string;
        neutral500?: string;
        neutral400?: string;
        neutral300?: string;
        neutral200?: string;
        neutral100?: string;
        neutral0?: string;
      };
    };
    status?: {
      success?: {
        main?: string;
        secondary?: string;
        tertiary?: string;
      };
      info?: {
        main?: string;
        background?: string;
      };
      warning?: {
        main?: string;
        secondary?: string;
        tertiary?: string;
        background?: string;
      };
      danger?: {
        main?: string;
        secondary?: string;
        tertiary?: string;
      };
    };
    customTypography?: {
      fontFamily?: string;
      h1?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      h2?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      h3?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      h4?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      h5?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      h6?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      h7?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      h8?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      subtitle1?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      subtitle2?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      body1?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      body2?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      body3?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      body4?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      button?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
      overline?: {
        fontSize?: string;
        lineHeight?: string;
        fontWeight?: string;
      };
    };
  }
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const theme: ThemeOptions = createTheme({
    customPalette: {
      primary: {
        main: '#5C881A',
        background: '#E7ECE4',
        heavy: '#405E12',
        yellow: '#FFFF00',
        orange: '#FF5A00',
        green: '#5C881A',
        blue: '#705AFA',
      },
      secondary: {
        main: '#F6F6F9',
      },
      neutral: {
        neutral900: '#212134',
        neutral800: '#32324D',
        neutral700: '#4A4A6A',
        neutral600: '#666687',
        neutral500: '#8E8EA9',
        neutral400: '#A5A5BA',
        neutral300: '#C0C0CF',
        neutral200: '#DCDCE4',
        neutral100: '#F6F6F9',
        neutral0: '#FFFFFF',
      },
    },
    status: {
      success: {
        main: '#5CB176',
        secondary: '#C6F0C2',
        tertiary: '#EAFBE7',
      },
      info: {
        main: '#705AFA',
        background: '#FFFFFF',
      },
      warning: {
        main: '#BE5D01',
        secondary: '#D9822F',
        tertiary: '#F29D41',
        background: '#527917',
      },
      danger: {
        main: '#B72B1A',
        secondary: '#D02B20',
        tertiary: '#EE5E52',
      },
    },
    customTypography: {
      //fontFamily: 'Roboto',
      h1: {
        fontSize: '38px',
        lineHeight: '48px',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '38px',
        lineHeight: '48px',
        fontWeight: 'regular',
      },
      h3: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 'regular',
      },
      h5: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 'bold',
      },
      h6: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 'regular',
      },
      h7: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 'bold',
      },
      h8: {
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: 'regular',
      },
      subtitle1: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 'bold',
      },
      subtitle2: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 'regular',
      },
      body1: {
        fontSize: '14px',
        lineHeight: '22px',
        fontWeight: 'bold',
      },
      body2: {
        fontSize: '14px',
        lineHeight: '22px',
        fontWeight: 'regular',
      },
      body3: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: 'bold',
      },
      body4: {
        fontSize: '12px',
        lineHeight: '20px',
        fontWeight: 'regular',
      },
      button: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 'regular',
      },
      overline: {
        fontSize: '10px',
        lineHeight: '20px',
        fontWeight: 'regular',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
