import { createMuiTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import 'fontsource-roboto';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2b385b',
    },
    secondary: {
      main: '#e16e0e',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
    ],
    fontSize: 14,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          WebkitFontSmoothing: 'auto',
          backgroundColor: '#f7f7f7',
          color: '#2b385b',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: '20px',
        fontSize: '10px',
      },
    },
  },
});
