// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './assets/styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8', // Documentation-style blue
    },
    secondary: {
      main: '#202124', // Dark gray for secondary elements
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: 'Roboto, system-ui, -apple-system, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);