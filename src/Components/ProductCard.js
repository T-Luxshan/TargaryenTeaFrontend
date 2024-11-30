import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  InputBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from '@mui/icons-material/Close';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const [open, setOpen] = useState(false); // State to manage the dialog (popup)
  
  // Function to handle quantity increase
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle quantity decrease
  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Toggle the dialog open state
  const handleToggleDialog = () => {
    setOpen(true); // Open the dialog
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  // Remove product from cart
  const handleRemoveProduct = () => {
    // Perform the product removal action here
    console.log("Product removed from cart");
    setOpen(false); // Close the dialog after removal
  };

  // Slide animation for dialog
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        mb: 4,
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          width: "40%",
          height: "auto",
        }}
      />

      {/* Product Details */}
      <CardContent
        sx={{
          flex: 1,
          paddingLeft: "30px",
          textAlign: "left",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Be the first to review this product
        </Typography>

        {/* Price */}
        <Typography variant="h5" color="black" mt={2}>
          RS {product.price}.00
        </Typography>

        {/* Quantity Selector */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            backgroundColor: "#1B4D3E",
            borderRadius: "4px",
            width: "120px",
            border: "1px solid #ddd",
          }}
        >
          {/* Minus Button */}
          <IconButton
            size="small"
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

          {/* Quantity Value */}
          <InputBase
            value={quantity} // Display the current quantity
            readOnly
            sx={{
              width: "40px",
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "white",
              paddingLeft: "13px",
            }}
          />

          {/* Plus Button */}
          <IconButton
            size="small"
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

        <Typography variant="body1" mt={1}>
          {product.description}
        </Typography>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          sx={{
            mt: 2,
            textTransform: "none",
            width: "100%",
            backgroundColor: "#1B4D3E",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "white",
              color: "#1B4D3E",
            },
            "&:hover::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#1B4D3E",
              transform: "translateX(100%)",
              transition: "transform 0.4s ease-out",
            },
          }}
          onClick={handleToggleDialog} // Toggle dialog on click
        >
          Add to Cart
        </Button>
      </CardContent>

      {/* Dialog (Popup) */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition} // Use the slide transition
        aria-labelledby="dialog-title" // Add ARIA label for accessibility
        aria-describedby="dialog-description" // Add ARIA description
        sx={{
          "& .MuiDialog-paper": {
            position: "absolute",
            background: "#f0eded",
            right: 0,
            height: "1500px",
            width: "450px", // Make the dialog full screen
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            borderRadius: 0, // Remove rounded corners for a full-screen look
            boxShadow: 3,
          },
        }}
      >
        <DialogTitle id="dialog-title">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h6">CART</Typography>
            <IconButton edge="end" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        {/* Horizontal Divider */}
        <Divider sx={{ margin: "16px 0" }} />

        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: "80px",
                height: "auto",
                marginRight: "16px",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">RS {product.price}.00</Typography>

              {/* Quantity Selector */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                  backgroundColor: "#1B4D3E",
                  borderRadius: "4px",
                  width: "120px",
                  border: "1px solid #ddd",
                }}
              >
                <IconButton
                  size="small"
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
                    paddingLeft: "13px",
                  }}
                />
                <IconButton
                  size="small"
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
            </Box>
          </Box>

          {/* Remove Button */}
          <Button
            variant="text"
            color="error"
            sx={{
              mt: 2,
              textTransform: "none",
              width: "100%",
              fontSize: "16px",
            }}
            onClick={handleRemoveProduct} // Remove the product from the cart
          >
            Remove
          </Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ProductCard;
