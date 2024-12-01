import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import productData from "../../Data/product.json"; // Import your product data from JSON file

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Simulate filtering the items that are added to the cart
  useEffect(() => {
    const filteredItems = productData.filter(item => item.isAddToCart); // Filter products where isAddToCart is true
    setCartItems(filteredItems);
    
    // Calculate subtotal
    const calculatedSubtotal = filteredItems.reduce((acc, item) => {
      return acc + item.price * 2; // Assuming quantity is 2 for now
    }, 0);
    setSubtotal(calculatedSubtotal);
  }, []);

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "16px" }}>
      {cartItems.length > 0 ? (
        <>
          {/* Table to display products */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    {/* Product Image and Name */}
                    <TableCell component="th" scope="row" sx={{ display: "flex", alignItems: "center" }}>
                      <img src={item.image} alt={item.name} style={{ width: "60px", marginRight: "16px" }} />
                      {item.name}
                    </TableCell>
                    {/* Product Price */}
                    <TableCell align="right">RS {item.price}.00</TableCell>
                    {/* Quantity (assuming static quantity, can be dynamic later) */}
                    <TableCell align="right">2</TableCell>
                    {/* Total (Price * Quantity) */}
                    <TableCell align="right">RS {item.price * 2}.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Subtotal in a separate card */}
          <Box
            sx={{
              marginTop: "20px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <Typography variant="h6">Subtotal: </Typography>
            <Typography variant="h6" sx={{ marginLeft: "8px" }}>RS {subtotal}.00</Typography>
          </Box>
        </>
      ) : (
        <Typography variant="h6">No items in the cart.</Typography> // Message when no items are in the cart
      )}
    </Box>
  );
};

export default CartPage;
