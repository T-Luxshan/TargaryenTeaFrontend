import React from "react";
import {
  Drawer,
  List,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  Store as StoreIcon,
  People as PeopleIcon,
  ListAlt as ListAltIcon,
  VerifiedUser as VerifiedUserIcon,
  Report as ReportIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";

const DrawerAdmin = () => {
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
    { text: "All Products", icon: <StoreIcon />, path: "/admin/products" },
    { text: "Sellers", icon: <PeopleIcon />, path: "/admin/sellers" },
    { text: "Buyers", icon: <PeopleIcon />, path: "/admin/buyers" },
    { text: "Order List", icon: <ListAltIcon />, path: "/admin/orders" },
    {
      text: "Seller Approval",
      icon: <VerifiedUserIcon />,
      path: "/admin/approvals",
    },
    { text: "Report Feedback", icon: <ReportIcon />, path: "/admin/reports" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    window.location.href = "/admin/login";
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#204436", // Updated dark green background
          color: "white",
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography
          variant="h5"
          component={NavLink}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#badbba", // Light green logo color
            fontWeight: "bold",
          }}
        >
          Thrifting.lk
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={item.path}
            sx={{
              textDecoration: "none",
              color: location.pathname === item.path ? "#badbba" : "white",
              "&.active": {
                backgroundColor: "#badbba", // Light green for active route
                color: "#204436", // Dark green text on active route
              },
              "&:hover": {
                backgroundColor: "#badbba", // Hover effect
                color: "#204436", // Dark green text on hover
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem
          button
          onClick={handleLogout}
          sx={{
            mt: 2,
            "&:hover": {
              backgroundColor: "#badbba", // Hover effect
              color: "#204436", // Dark green text on hover
            },
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon sx={{ color: "inherit" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerAdmin;
