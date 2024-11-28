import axios from 'axios';

const api = axios.create({
  baseURL: 'YOUR_API_BASE_URL',
});

export const fetchBestSellers = async () => {
  const response = await api.get('/sellers/best');
  return response.data;
};

export const fetchOrderData = async (type) => {
  const response = await api.get(`/orders/stats?type=${type}`);
  return response.data;
};

export const fetchPriceData = async () => {
  const response = await api.get('/products/prices');
  return response.data;
};