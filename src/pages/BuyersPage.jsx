import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Breadcrumbs,
  Link
} from '@mui/material';
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

const Buyers = () => {
  const buyers = [

    { name: 'Piranaavei', email: 'piranaberem14@gmail.com' },
    { name: 'Joeson Clerve', email: 'joesonclerve@gmail.com' }
  ];

  return (
    <Container maxWidth="xl">
      {/* Breadcrumb */}
      <Box sx={{ my: 2 }}>
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" href="/">Home</Link>
          <Typography color="text.primary">Buyers</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h5" sx={{ mb: 3 }}>Buyers</Typography>

      <Grid container spacing={3}>
        {buyers.map((buyer, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              sx={{
                p: 2,
                bgcolor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s'
                }
              }}
            >
              <Typography variant="h6" gutterBottom>
                {buyer.name}
              </Typography>
              <Typography color="text.secondary">
                Email: {buyer.email}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Buyers;