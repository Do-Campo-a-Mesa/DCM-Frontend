import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import Theme from './lib/theme';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import AppRouter from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <Theme>
          <AppRouter />
        </Theme>
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
