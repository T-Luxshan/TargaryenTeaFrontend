import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import OrderService from "../Service/orderService";
import { useNavigate } from 'react-router-dom'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const loadBestSellers = async () => {
      try {
        setLoading(true); 
        const data = await OrderService.fetchBestSellers();
        setProducts(data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch best sellers');
        setLoading(false); 
        console.error("Failed to fetch best sellers", error);
      }
    };
    loadBestSellers();
  }, []);

  
  const handleViewAllClick = () => {
    navigate('/tea'); 
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={4} sx={{ marginLeft: "10px", marginRight: "10px", alignItems: "center", justifyContent: "center" }}>
        {loading ? (
          <Typography variant="body1" sx={{ color: 'text.secondary', margin: "auto" }}>
            Loading best sellers...
          </Typography>
        ) : error ? (
          <Typography variant="body1" sx={{ color: 'error.main', margin: "auto" }}>
            {error}
          </Typography>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Item sx={{ height: "450px", width: "100%" }}>
                <Card sx={{ height: "450px", width: "300px", borderRadius: "0", boxShadow: "none" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={`/images/${product.image_url}`} // Assuming images are in the public folder
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "22px", fontWeight: "400", fontFamily: "Poppin" }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rs.{product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ color: 'text.secondary', margin: "auto" }}>
            No best sellers available.
          </Typography>
        )}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, mr: "55px" }}>
        <Button variant="outlined" style={{ borderColor: "#c9c6b9", color: "green", fontFamily: "Poppin" }} onClick={handleViewAllClick}>
          View All Products
        </Button>
      </Box>
    </Box>
  );
}
