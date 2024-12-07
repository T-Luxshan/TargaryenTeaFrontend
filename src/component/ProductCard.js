import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductCard = ({ product, onDelete }) => {
  // Truncate the description to 250 characters if it exceeds the limit
  const truncatedDescription =
    product.description.length > 250
      ? `${product.description.substring(0, 250)}...`
      : product.description;

  return (
    <Card
      sx={{
        width: 350, // Increased width
        height: 220, // Adjusted height
        margin: 2,
        display: "flex",
        flexDirection: "column",
        position: "relative", // Allows absolute positioning for the delete icon
      }}
    >
      <CardHeader
        avatar={<Avatar src={product.image} alt={product.name} />}
        title={product.name}
        subheader={`Price: $${product.price}`}
        sx={{ padding: "8px 16px" }} // Adjusted padding
      />
      <CardContent sx={{ padding: "12px 16px", flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {truncatedDescription}
        </Typography>
      </CardContent>
      <IconButton
        aria-label="delete"
        onClick={() => onDelete(product.id)}
        sx={{
          color: "red",
          position: "absolute",
          bottom: 8, // Adjusts distance from the bottom
          right: 8, // Adjusts distance from the right
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;