import React from 'react';
import { Box, Typography, Grid, Button, Divider } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = ({ cartItems, handleQuantityChange, handleRemove }) => {
  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: 500,
        margin: '0 auto',
        height: '90vh', // Static height to cover full screen
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Title */}
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left' }}>
        CART
      </Typography>
      {/* Horizontal Line */}
      <Divider sx={{ marginBottom: 2 }} />

      <Box sx={{ flex: 1, overflowY: 'auto' }}> {/* Scrollable cart items section */}
        {cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              marginBottom: 6, // Padding between products
              paddingBottom: 2,
            }}
          >
            <Grid container spacing={2} alignItems="center">
              {/* Product Image */}
              <Grid item xs={3}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '70px', // Slightly smaller image height
                    borderRadius: '5px',
                    objectFit: 'cover',
                  }}
                />
              </Grid>

              {/* Product Details */}
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'left' }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'gray', marginTop: '5px', textAlign: 'left' }}
                >
                  ${item.price.toFixed(2)}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: '10px',
                  }}
                >
                  {/* Box around AddIcon and RemoveIcon buttons */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      padding: '5px',
                    }}
                  >
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleQuantityChange(item.id, 'decrease')}
                      sx={{
                        minWidth: '30px',
                        padding: '8px',
                        height: '35px',
                        color: 'black', // Set black color for the - button
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Typography
                      variant="body1"
                      sx={{
                        marginX: 1,
                        fontWeight: 'bold',
                        width: '20px',
                        textAlign: 'center',
                      }}
                    >
                      {item.quantity}
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleQuantityChange(item.id, 'increase')}
                      sx={{
                        minWidth: '30px',
                        padding: '8px',
                        height: '35px',
                        color: 'black', // Set black color for the + button
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </Box>
                </Box>
              </Grid>

              {/* Remove Button */}
              <Grid item xs={3}>
                <Button
                  variant="text"
                  size="small"
                  sx={{ textDecoration: 'underline', color: 'black' }}
                  onClick={() => handleRemove(item.id)}
                >
                  REMOVE
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>

      {/* Horizontal Line above Subtotal */}
      <Divider sx={{ marginBottom: 2 }} />

      {/* Checkout and View Basket Buttons */}
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Subtotal: $
          {cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              color: 'black',
              backgroundColor: 'white',
              border: '1px solid black',
              padding: '5px 10px',
              fontSize: '0.8rem',
              width: '35%',
              borderRadius: 0,
            }}
          >
            VIEW BASKET
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              backgroundColor: '#204436',
              padding: '5px 10px',
              fontSize: '0.8rem',
              borderRadius: 0,
              width: '35%',
              '&:hover': { backgroundColor: 'darkgreen' },
            }}
          >
            CHECKOUT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
