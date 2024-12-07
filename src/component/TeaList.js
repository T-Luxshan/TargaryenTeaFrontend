import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import ProductService from "../Service/productService";
import { SettingsPower } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
export default function TeaList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadBestSellers = async () => {
      try {
        setLoading(true); // Set loading to true before fetch
        const data = await ProductService.fetchAllProducts();
        setProducts(data);
        setLoading(false); // Set loading to false once data is loaded
      } catch (error) {
        setError('Failed to fetch all products');
        setLoading(false); // Set loading to false on error
        console.error("Failed to fetch all products", error);
      }
    };
    loadBestSellers();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', backgroundColor: 'pink', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ width: '50%' }}>
      {products.map((product, index) => (
        <Grid key={index} item xs={2} sm={3} md={3}>
          <Item>
            {/* Render your product information here */}
            <h3>{product.name}</h3>
            <img src={product.image_url} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <p>Price: Rs. {product.price}</p>
          </Item>
        </Grid>
      ))}
    </Grid>
  </Box>
  );

}
