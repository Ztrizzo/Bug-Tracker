import { green } from '@mui/material/colors';
import { createTheme, colors } from '@mui/material/styles';
import { amber, indigo, deepPurple } from '@mui/material/colors';

// Currently undecided on colors
const theme = createTheme({

  palette: {
    primary: {
      main: deepPurple[300]
    },
    secondary: green,
    background: {
      default: '#FFFFFF',
      paper: '#FFFCF7',
    }
  },
});

export default theme;