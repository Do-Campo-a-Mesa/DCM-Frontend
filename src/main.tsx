import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import Theme from './lib/theme';
import AppRouter from './router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Theme>
        <AppRouter />
      </Theme>
    </StyledEngineProvider>
  </React.StrictMode>
);
