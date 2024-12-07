import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
 AppBar,
 Drawer,
 List,
 ListItemButton,
 ListItemIcon,
 ListItemText,
 Typography,
 useTheme,
 IconButton,
 Menu,
 MenuItem,
 Box,
 Avatar,
} from '@mui/material';
import {
 Dashboard as DashboardIcon,
 Inventory as ProductsIcon,
 People as BuyersIcon,
 ShoppingCart as OrdersIcon,
 Logout as LogoutIcon,
 Settings as SettingsIcon,
} from '@mui/icons-material';

const Sidebar = () => {
 const theme = useTheme();
 const navigate = useNavigate();
 const location = useLocation();
 const [selected, setSelected] = useState(location.pathname);
 const [anchorEl, setAnchorEl] = useState(null);

 const menuItems = [
   { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
   { text: 'All Products', icon: <ProductsIcon />, path: '/admin/products' },
   { text: 'Buyers', icon: <BuyersIcon />, path: '/admin/buyers' },
   { text: 'Order List', icon: <OrdersIcon />, path: '/admin/orders' },
   { text: 'Logout', icon: <LogoutIcon />, path: '/admin/logout' },
 ];

 const handleMenuClick = (path) => {
   setSelected(path);
   navigate(path);
 };

 const handleProfileClick = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleProfileClose = () => {
   setAnchorEl(null);
 };

 return (
   <>
     <AppBar
       position="fixed"
       sx={{
         zIndex: (theme) => theme.zIndex.drawer + 1,
         bgcolor: theme.palette.primary.main,
       }}
     >
       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6">TargaryenTea</Typography>
        </Link>
         
         <IconButton onClick={handleProfileClick} sx={{ color: 'white' }}>
           <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
         </IconButton>

         <Menu
           anchorEl={anchorEl}
           open={Boolean(anchorEl)}
           onClose={handleProfileClose}
           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
           transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         >
           <MenuItem>
             <Typography>Admin Name</Typography>
           </MenuItem>
           <MenuItem onClick={handleProfileClose}>
             <ListItemIcon>
               <SettingsIcon fontSize="small" />
             </ListItemIcon>
             <ListItemText>Settings</ListItemText>
           </MenuItem>
         </Menu>
       </Box>
     </AppBar>

     <Drawer
       variant="permanent"
       sx={{
         width: 240,
         flexShrink: 0,
         '& .MuiDrawer-paper': {
           width: 240,
           boxSizing: 'border-box',
           bgcolor: 'white',
           borderRight: '1px solid rgba(0, 0, 0, 0.12)',
           marginTop: '64px',
         },
       }}
     >
       <List>
         {menuItems.map((item) => (
           <ListItemButton
             key={item.text}
             selected={selected === item.path}
             onClick={() => handleMenuClick(item.path)}
             sx={{
              marginTop:"10px",
               '&.Mui-selected': {
                 bgcolor: 'primary.light',
                 '&:hover': {
                   bgcolor: 'primary.light',
                 },
               },
             }}
           >
             <ListItemIcon sx={{ color: selected === item.path ? 'primary.main' : 'inherit' }}>
               {item.icon}
             </ListItemIcon>
             <ListItemText 
               primary={item.text} 
               sx={{ color: selected === item.path ? 'primary.main' : 'inherit' }} 
             />
           </ListItemButton>
         ))}
       </List>
     </Drawer>
   </>
 );
};

export default Sidebar;