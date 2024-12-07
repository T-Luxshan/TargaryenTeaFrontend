//AdminPage

import { Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from '../component/Sidebar';
import Dashboard from './DashboardPage';
import Buyers from './BuyersPage';
import Orders from './OrderListPage';
import AllProducts from './AllProducts';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E8B57', 
    },
    secondary: {
      main: '#1a5e3a',
    },
  },
});

export function AdminDashboard() { // Named Export
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
          }}
        >
          <Box sx={{ marginTop: '64px' }}> 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/buyers" element={<Buyers />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}