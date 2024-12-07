import React from "react";
import { Box } from "@mui/material";

const ProductImage = ({ image_url }) => {
  return (
    <Box
      component="img"
      src={image_url}
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
