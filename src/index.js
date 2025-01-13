// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './assets/styles.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1abc9c',
    },
    secondary: {
      main: '#16a085',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: '#adbac7',
    },
  },
  typography: {
    fontFamily: '"Source Code Pro", monospace',
    fontWeightLight: 200,
    fontWeightRegular: 200,
    fontWeightMedium: 200,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 200,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 200,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 200,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 200,
      letterSpacing: '-0.02em',
    },
    body1: {
      fontFamily: '"Source Code Pro", monospace',
      fontSize: '1rem',
      fontWeight: 200,
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Source Code Pro", monospace',
      fontSize: '0.875rem',
      fontWeight: 200,
      lineHeight: 1.7,
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);