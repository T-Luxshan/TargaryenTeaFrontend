import { Container, Box } from '@mui/material';
import StatsCards from '../components/StatsCards';
import OrderGraph from '../components/OrderGraph';
import BestSellers from '../components/BestSellers';
import PricesGraph from '../components/PricesGraph';

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 3 }}>
        <StatsCards />
        <OrderGraph />
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          mt: 3,
          flexDirection: { xs: 'column', md: 'row' } 
        }}>
          <BestSellers />
          <PricesGraph />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;