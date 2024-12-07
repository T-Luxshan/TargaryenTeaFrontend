import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import GiftHamper from "../images/giftHampers.webp";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function GiftHampers() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/tea'); 
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '520px' }}>
  
      <Box
        sx={{
          flex: 2,
          backgroundImage: `url(${GiftHamper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          textAlign: 'center',
          fontSize:"16px",
          textAlign: 'justify',
          marginLeft:"12px",
          color:"#666564",
          fontFamily:"Poppin",
          lineHeight: '1.8',
        }}
      >
        
        <p>
        "Discover our exclusive gift hampers, thoughtfully crafted for every occasion. 
        Whether you choose a luxurious assortment or a simple yet elegant selection,
        these hampers are the perfect way to show your care. Purchase one today and 
        surprise your loved ones—it’s a gesture that will not only bring joy but also
        strengthen your bond and create lasting memories." 
        Let me know if you'd like further tweaks!
        </p>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4,mr:"50px" }}>
        <Button variant="outlined" style={{borderColor:"#c9c6b9",color:"green",fontFamily:"Poppin"}} onClick={handleClick}>Shop Now !</Button>
      </Box>
      </Box>
    </Box>
  );
}
