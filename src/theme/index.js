import { createTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      paper: 'rgba(55, 55, 55, 0.95)',
      default: 'rgba(18, 18, 18, 1)'
    },
    primary: {
      main: '#03a9f4',
      light: '#67daff',
      dark: '#007ac1',
    },
    secondary: {
      main: '#ec407a',
      light: '#ff77a9',
      dark: '#b4004e',
    },
  }
});

export default responsiveFontSizes(theme);
