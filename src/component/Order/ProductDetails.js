import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  Drawer,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const ProductDetails = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1); // Product detail page quantity
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // To store the cart items

  const { name, price, description,  image_url } = productDetails;

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Handler to add product to cart
  const handleAddToCart = () => {
    const newItem = {
      name,
      price,
      image_url,
      quantity,
    };

    // Check if the product already exists in the cart
    const existingItem = cartItems.find((item) => item.name === name);
    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cartItems, newItem];
    }

    setCartItems(updatedCart);
    setDrawerOpen(true); // Open the sidebar
  };

  // Handler to remove product from the cart
  const handleRemoveProduct = (productName) => {
    const updatedCart = cartItems.filter((item) => item.name !== productName);
    setCartItems(updatedCart);
  };

  // Handler to update quantity in the cart
  const handleCartQuantityChange = (productName, delta) => {
    const updatedCart = cartItems.map((item) =>
      item.name === productName
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ padding: 4, maxWidth: 500 }}>
      {/* Product Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="left"
        sx={{ fontFamily: "FuturaPTMedium" }}
      >
        {name}
      </Typography>

      {/* Review and Product Code */}
      {/* <Typography
        variant="body2"
        color="#0b692d"
        textAlign="left"
        sx={{ fontFamily: "FuturaPTLight", fontWeight: "1000" }}
      >
        Be the first to review this product
        <span style={{ marginLeft: 12, fontWeight: "bold" }}>
          Product Code: {productCode}
        </span>
      </Typography> */}

      {/* Price */}
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="left"
        sx={{ marginTop: 2, color: "black", fontFamily: "AGaramondPro" }}
      >
        RS {price.toFixed(2)}
      </Typography>

      {/* Quantity Controls */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          backgroundColor: "#1B4D3E",
          width: "120px",
          height: "50px",
          border: "1px solid #ddd",
        }}
      >
        <IconButton
          size="medium"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          sx={{ color: "white", flex: 1, fontFamily: "FuturaCyrillicLight" }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          sx={{
            width: "40px",
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
            fontSize: "1.2rem",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "FuturaCyrillicLight",
          }}
        >
          {quantity}
        </Typography>
        <IconButton
          size="medium"
          onClick={() => setQuantity((prev) => prev + 1)}
          sx={{ color: "white", flex: 1, fontFamily: "FuturaCyrillicLight" }}
        >
          <AddIcon />
        </IconButton>
      </Box>

      {/* Product Description */}
      <Divider sx={{ marginY: 3 }} />
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="left"
        sx={{ fontFamily: "AGaramondPro", fontSize: "18px" }}
      >
        {description}
      </Typography>

      {/* Add to Cart Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        sx={{
          mt: 2,
          textTransform: "none",
          width: "100%",
          backgroundColor: "#204436",
          color: "white",
          borderRadius: 0,
          border: "2px solid transparent",
          fontFamily: "FuturaPTBold",
          fontSize: "18px",
          "&:hover": {
            backgroundColor: "white",
            color: "#204436",
            border: "2px solid rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        ADD TO CART
      </Button>

      {/* Sidebar Drawer */}
      <Drawer anchor="right" open={isDrawerOpen}>
        <Box
          sx={{
            width: 350,
            padding: 2,
            backgroundColor: "#f5f5f5",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {/* Close Icon and CART Title */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontFamily: "Futura" }}>
                CART
              </Typography>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{ fontFamily: "FuturaCyrillicLight" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider sx={{ marginBottom: 2 }} />

            {/* Cart Content */}
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: 2,
                  }}
                >
                  {/* Product Image */}
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      marginRight: 2,
                      overflow: "hidden",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Product Name, Price, and Cart Quantity */}
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: " FuturaPTLight" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: " FuturaPTLight", fontWeight: "bold" }}
                    >
                      RS {item.price.toFixed(2)}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                        width: "90px",
                        height: "40px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <IconButton
                        size="medium"
                        onClick={() => handleCartQuantityChange(item.name, -1)}
                        sx={{
                          flex: 1,
                          fontFamily: " FuturaCyrillicLight",
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography
                        sx={{
                          width: "40px",
                          textAlign: "center",
                          color: "black",
                          fontSize: "1.2rem",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontFamily: " FuturaCyrillicLight",
                        }}
                      >
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="medium"
                        onClick={() => handleCartQuantityChange(item.name, 1)}
                        sx={{ flex: 1, fontFamily: " FuturaCyrillicLight" }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Delete Icon */}
                  <IconButton
                    onClick={() => handleRemoveProduct(item.name)}
                    sx={{
                      marginLeft: 2,
                      fontSize: "1.0rem",
                      fontFamily: " FuturaPTLight",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Typography variant="body2">Your cart is empty.</Typography>
            )}
          </Box>

          {/* Subtotal and Buttons */}
          <Box>
            <Divider sx={{ marginY: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" sx={{ fontFamily: "AGaramondPro" }}>
                Subtotal
              </Typography>
              <Typography variant="h6" sx={{ fontFamily: "AGaramondPro" }}>
                RS {subtotal.toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  backgroundColor: "#204436",
                  color: "white",
                  borderRadius: 0,
                  fontFamily: "FuturaPTBold",
                  "&:hover": {
                    backgroundColor: "#102218",
                  },
                }}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ProductDetails;
