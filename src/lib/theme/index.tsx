import React, { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

interface ThemeProps {
  children: ReactNode;
}

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      primary: {
        main: string;
        background: string;
        black: string;
        yellow: string;
        red: string;
      };
      secondary: {
        main: string;
      };
      neutral: {
        secondaryText: string;
        inactive: string;
        boards: string;
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
      h9: {
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
    };
  }

  interface ThemeOptions {
    customPalette?: {
      primary?: {
        main?: string;
        background?: string;
        black?: string;
        yellow?: string;
        red?: string;
      };
      secondary?: {
        main?: string;
      };
      neutral?: {
        secondaryText?: string;
        inactive?: string;
        boards?: string;
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
      h9?: {
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
    };
  }
}

const Theme: React.FC<ThemeProps> = ({ children }) => {
  const theme: ThemeOptions = createTheme({
    customPalette: {
      primary: {
        main: '#348f42',
        background: '#f6f6f6',
        black: '#464646',
        yellow: '#EEC02A',
        red: '#FF7070',
      },
      secondary: {
        main: '#7EC042',
      },
      neutral: {
        secondaryText: '#A3A3A3',
        inactive: '#C7C7C7',
        boards: '#ECECEC',
      },
    },
    status: {
      success: {
        main: '#348f42',
        secondary: '#C6F0C2',
        tertiary: '#EAFBE7',
      },
      info: {
        main: '#705AFA',
        background: '#f6f6f6',
      },
      warning: {
        main: '#EEC02A',
        secondary: '#EED481',
        tertiary: '#EEDEA9',
        background: '#EEE3BE',
      },
      danger: {
        main: '#FF7070',
        secondary: '#D02B20',
        tertiary: '#EE5E52',
      },
    },
    customTypography: {
      fontFamily: 'Montserrat',
      h1: {
        fontSize: '42px',
        lineHeight: '48px',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '40px',
        lineHeight: '48px',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '24px',
        lineHeight: '40px',
        fontWeight: 'bold',
      },
      h5: {
        fontSize: '18px',
        lineHeight: '32px',
        fontWeight: 'bold',
      },
      h6: {
        fontSize: '18px',
        lineHeight: '32px',
        fontWeight: 'medium',
      },
      h7: {
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 'semibold',
      },
      h8: {
        fontSize: '12px',
        lineHeight: '28px',
        fontWeight: 'bold',
      },
      h9: {
        fontSize: '12px',
        lineHeight: '28px',
        fontWeight: 'medium',
      },
      subtitle1: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 'regular',
      },
      subtitle2: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 'regular',
      },
      body1: {
        fontSize: '24px',
        lineHeight: '22px',
        fontWeight: 'regular',
      },
      body2: {
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: 'regular',
      },
      body3: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 'regular',
      },
      body4: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 'medium',
      },
      button: {
        fontSize: '10px',
        lineHeight: '20px',
        fontWeight: 'semiBold',
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
