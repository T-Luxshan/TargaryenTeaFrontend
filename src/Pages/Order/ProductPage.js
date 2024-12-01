import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../../Components/Order/ProductCard";
import productData from "../../Data/product.json"; // Importing the JSON file

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData); // Set the imported data
  }, []);

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "16px" }}>
      
        {products.map((product) => (
            <ProductCard product={product} />
       
        ))}
    </Box>
  );
};

export default ProductPage; 