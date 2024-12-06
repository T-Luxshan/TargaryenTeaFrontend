import React, { useState } from "react";
import { Grid, Container, Typography, Box, Button } from "@mui/material";
import products from "../../Data/Products.json";
import ProductCard from "../../component/Admin/ProductCard";
import DrawerAdmin from "../../component/Admin/DrawerAdmin";
import ProductForm from "./ProductForm";

const AllProducts = () => {
  const [formOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  return (
    <Container>
      <DrawerAdmin />
      <Box sx={{ paddingLeft: "100px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#204436", // Apply dark green to the heading
              fontWeight: "bold",
            }}
          >
            Product List
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#204436", // Dark green for the button
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#badbba", // Light green on hover
                color: "#204436",
              },
            }}
            onClick={handleOpenForm}
          >
            Add +
          </Button>
        </Box>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box sx={{ margin: 2 }}>
                <ProductCard product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Include the ProductForm */}
      <ProductForm open={formOpen} handleClose={handleCloseForm} />
    </Container>
  );
};

export default AllProducts;
