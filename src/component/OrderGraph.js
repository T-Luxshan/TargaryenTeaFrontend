import { useState } from 'react';
import { Paper, ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const OrderGraph = () => {
  const [viewType, setViewType] = useState('monthly');

  const monthlyData = {
    labels: ['May', 'June', 'July', 'August', 'September', 'October'],
    values: [0, 2, 6, 2, 0, 0],
  };

  const weeklyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    values: [1, 3, 2, 2],
  };

  const currentData = viewType === 'monthly' ? monthlyData : weeklyData;

  const chartData = {
    labels: currentData.labels,
    datasets: [{
      label: 'Total Orders',
      data: currentData.values,
      fill: true,
      borderColor: '#2E8B57',
      backgroundColor: 'rgba(46, 139, 87, 0.2)',
      tension: 0.4,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Order Trends',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Orders'
        }
      },
      x: {
        title: {
          display: true,
          text: viewType === 'monthly' ? 'Month' : 'Week'
        }
      }
    },
  };

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Total Order Graph</Typography>
        <ToggleButtonGroup
          value={viewType}
          exclusive
          onChange={(e, newValue) => newValue && setViewType(newValue)}
          size="small"
        >
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="weekly">Weekly</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Line data={chartData} options={options} />
    </Paper>
  );
};

export default OrderGraph;