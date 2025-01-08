import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CssBaseline } from '@mui/material';
import App from './App';
import SettingsProvider from './contexts/SettingsProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <SettingsProvider>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </HelmetProvider>
);
