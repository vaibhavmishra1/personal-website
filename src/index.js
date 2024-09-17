// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './assets/styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Your preferred primary color
    },
    secondary: {
      main: '#ff5722', // Your preferred secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
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