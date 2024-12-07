//BestSeller.jsx
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Rating,
    Button,
    Box
  } from '@mui/material';
  
  const BestSellers = () => {
    const sellers = [
      {
        name: 'Piranaavei Beremkumar',
        email: 'piranaberem14@gmail.com',
        rating: 9.0,
      },
    
      {
        name: 'Joeson Clerve',
        email: 'joesonclerve@gmail.com',
        rating: 7.5,
      },
    ];
  
    return (
      <Paper sx={{ 
        p: 2, 
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant="h6" gutterBottom>
          Best Sellers
        </Typography>
        <List sx={{ flex: 1 }}>
          {sellers.map((seller) => (
            <ListItem key={seller.email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  {seller.name[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={seller.name}
                secondary={seller.email}
              />
              <Rating value={seller.rating / 2} precision={0.5} readOnly />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          
          fullWidth
          sx={{
            mt: 2,
            bgcolor: '#2E8B57',
            '&:hover': {
              bgcolor: '#0E8441FF'
            }
          }}
        >
          ⭐ Top Rated Sellers ⭐
        </Button>
      </Paper>
    );
  };
  
  export default BestSellers;