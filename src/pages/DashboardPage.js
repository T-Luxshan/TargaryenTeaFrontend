//DashboardPage.jsx is a new file that will contain the Dashboard component. This component will be used to display the main dashboard page. The Dashboard component will contain the StatsCards, OrderGraph, BestSellers, and PricesGraph components. The StatsCards component will display the statistics cards, the OrderGraph component will display the order graph, the BestSellers component will display the best sellers, and the PricesGraph component will display the prices graph.
import { Container, Box } from '@mui/material';
import StatsCards from '../component/StatsCards';
import OrderGraph from '../component/OrderGraph';
import BestSellers from '../component/BestSellersGraph';
import PricesGraph from '../component/PricesGraph';

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