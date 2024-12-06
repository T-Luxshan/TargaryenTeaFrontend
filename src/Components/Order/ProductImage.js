import React from "react";
import { Box } from "@mui/material";

const ProductImage = ({ imageUrl }) => {
  return (
    <Box
      component="img"
      src={imageUrl}
      alt="Product"
      sx={{
        width: "100%",
        maxWidth: 500,
        borderRadius: 2,
      }}
    />
  );
};

export default ProductImage;
