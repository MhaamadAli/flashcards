import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#eef5fa',
    },
    text: {
      primary: '#3a86ff',
      secondary: '#000000',
    },
    primary: {
      main: '#3a86ff',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    h6: {
      color: '#3a86ff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#171d36',
      secondary: '#24283e'
    },
    text: {
      primary: '#00ffb3',
      secondary: '#c3dde9',
    },
    primary: {
      main: '#00ffb3',
    },
    secondary: {
      main: '#c3dde9',
    },
  },
  typography: {
    h6: {
      color: '#00ffb3',
    },
  },
});
