import React from "react";
import { Box,Container ,Paper} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductImage from "../../component/Order/ProductImage";
import ProductDetails from "../../component/Order/ProductDetails";
import NavBar  from "../../component/NavBar";
import Logo from  "../../images/logo.png";
import { styled } from '@mui/material/styles';
import Footer from "../../component/Footer";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const Product = () => {

  // Example product data
  const product = {
    imageUrl:
      "https://ahmadtea.lk/cdn/shop/files/Camomile_Lemongrass20teabags_700x.jpg?v=1715244390", // Replace with the correct image path from public folder
    name: "Camomile & Lemongrass",
    price: 550.0,
    description:
      "Camomile & Lemongrass Infusion is a deliciously relaxing herbal tea that soothes with every sip. In this delicately fragrant blend, lemongrass adds an exotic citrus twist to much-loved camomile.The ProductDetails component is a React functional component designed for displaying product information and managing a shopping cart. It provides a detailed view of a product, including its name, price, description, and an interactive feature for adding the product to a shopping cart. Users can adjust the product quantity before adding it to the cart and manage the cart items via a sidebar (Drawer) that dynamically updates based on user interactions.",
    productCode: "0006", // Adding product code for details
  };

  return (
    <>
   <div>
       <img src={Logo} style={{width:"200px",height:"120px",marginTop:"10px"}}/>
        <NavBar/>
        <Item style={{backgroundColor:'#204436',color:"white",height:"30px",paddingTop:"12px"}}>Special offers happening now !         </Item>

   </div>
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        {/* Left: Product Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ProductImage imageUrl={product.imageUrl} />
          </Box>
        </Grid>

        {/* Right: Product Details */}
        <Grid item xs={12} md={6}>
          <ProductDetails productDetails={product} />
        </Grid>
      </Grid>
    </Container>
    <Footer/>
     </>
  );
};

export default Product;
