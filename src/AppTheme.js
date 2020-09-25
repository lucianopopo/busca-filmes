import { ptBR } from '@material-ui/core/locale';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const AppTheme = createMuiTheme(
  {
    typography: {
      fontFamily: ['Geomanist'].join(','),
    },
  },
  ptBR
);

export default AppTheme;
