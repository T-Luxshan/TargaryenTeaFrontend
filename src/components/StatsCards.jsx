import { 
    Grid, 
    Paper, 
    Typography, 
    Box,
    IconButton,
    Menu,
    MenuItem
  } from '@mui/material';
  import { 
    ShoppingCart as CartIcon,
    People as PeopleIcon,
    Inventory as ProductIcon,
    Assignment as OrderIcon,
    MoreVert as MoreVertIcon 
  } from '@mui/icons-material';
  import { useState } from 'react';
  
  const StatsCards = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    
    const handleMenuClick = (event, cardId) => {
      setAnchorEl(event.currentTarget);
      setSelectedCard(cardId);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      setSelectedCard(null);
    };
  
    const stats = [
      { 
        id: 1,
        title: 'Total Products', 
        value: '61', 
        icon: <ProductIcon sx={{ fontSize: 40 }}/>, 
        color: '#42a5f5' 
      },
      { 
        id: 2,
        title: 'Total Sellers', 
        value: '6', 
        icon: <PeopleIcon sx={{ fontSize: 40 }}/>, 
        color: '#ff9800' 
      },
      { 
        id: 3,
        title: 'Total Buyers', 
        value: '14', 
        icon: <CartIcon sx={{ fontSize: 40 }}/>, 
        color: '#66bb6a' 
      },
      { 
        id: 4,
        title: 'Total Orders', 
        value: '8', 
        icon: <OrderIcon sx={{ fontSize: 40 }}/>, 
        color: '#ab47bc' 
      },
    ];
  
    const menuItems = [
      { text: 'View Details', action: () => console.log('View Details clicked') },
      { text: 'Download Report', action: () => console.log('Download Report clicked') },
      { text: 'Share', action: () => console.log('Share clicked') },
    ];
  
    return (
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.id}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                bgcolor: stat.color,
                color: 'white',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
                position: 'relative'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="h6" gutterBottom>
                  {stat.title}
                </Typography>
                <IconButton 
                  size="small" 
                  sx={{ color: 'white', marginTop: -1, marginRight: -1 }}
                  onClick={(e) => handleMenuClick(e, stat.id)}
                  aria-label="more options"
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                mt: 'auto'
              }}>
                <Typography variant="h3">
                  {stat.value}
                </Typography>
                {stat.icon}
              </Box>
            </Paper>
          </Grid>
        ))}
  
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index}
              onClick={() => {
                item.action();
                handleMenuClose();
              }}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    );
  };
  
  export default StatsCards;