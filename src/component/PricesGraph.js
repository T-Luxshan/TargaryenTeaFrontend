import { Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PricesGraph = () => {
  const data = {
    labels: ['May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [{
      label: 'Total Product Prices',
      data: [0, 180000, 240000, 0, 0, 0],
      backgroundColor: '#2E8B57',
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
        text: 'Monthly Product Prices',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Price (Rs)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    },
  };

  return (
    <Paper sx={{ p: 2, flex: 1 }}>
      <Typography variant="h6" gutterBottom>
        Total Product Prices Graph
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Monthly Data
      </Typography>
      <Bar data={data} options={options} />
    </Paper>
  );
};

export default PricesGraph;