import { createMuiTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import 'typeface-roboto';
import bg from '../../details/images/bg1.jpg';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#ADD8E6',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          WebkitFontSmoothing: 'auto',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: '10px',
        fontSize: '20px',
      },
    },
  },
},
ptBR);
