import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  InputBase,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import CartSummaryPage from "../../Pages/Order/CartSummaryPage";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartVisible, setCartVisible] = useState(false);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleToggleCart = () => setCartVisible((prev) => !prev);

  useEffect(() => {
    if (cartVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [cartVisible]);

  return (
    <Box sx={{ position: "relative" }}>
      {cartVisible && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 998,
            }}
          />
          <Box
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "25%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 1000,
              boxShadow: 3,
              padding: 2,
              overflowY: "auto",
              transition: "transform 0.3s ease-out",
              transform: cartVisible ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <IconButton
              onClick={handleToggleCart}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 1100,
                color: "black",
              }}
            >
              <CloseIcon />
            </IconButton>
            <CartSummaryPage />
          </Box>
        </>
      )}

      <Card sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, mb: 4 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{ width: "40%", height: "auto" }}
        />
        <CardContent sx={{ flex: 1, paddingLeft: 3 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="left">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            Be the first to review this product
          </Typography>
          <Typography variant="h5" color="black" mt={2} textAlign="left">
            RS {product.price}.00
          </Typography>

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
              onClick={handleDecrease}
              sx={{
                color: "white",
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <RemoveIcon />
            </IconButton>

            <InputBase
              value={quantity}
              readOnly
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
                paddingLeft: "13px"
              }}
            />

            <IconButton
              size="medium"
              onClick={handleIncrease}
              sx={{
                color: "white",
                flex: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>

          <Typography variant="body1" mt={1} textAlign="left">
            {product.description}
          </Typography>

          <Button
            variant="contained"
            onClick={handleToggleCart}
            sx={{
              mt: 2,
              textTransform: "none",
              width: "100%",
              backgroundColor: "#204436",
              color: "white",
              borderRadius: 0,
              border: "2px solid transparent",
              "&:hover": {
                backgroundColor: "white",
                color: "#204436",
                border: "2px solid rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
