// src/theme/index.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#2E8B57' },
    secondary: { main: '#1a5e3a' },
    background: { default: '#f5f5f5' }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: { zIndex: 1200 }
      }
    }
  }
});