import React from 'react';
import videoSrc from '../gif/successful2.mp4';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
const SuccessPage = () => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; 
    }
  }, []);

  return (
    <Box sx={{marginTop:"130px"}}>

      <video ref={videoRef} width="600" autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Typography sx={{color:"black", fontSize:"30px",marginTop:"20px", fontweigh:"800"}}>Transaction Successful</Typography>
      
      {/*direct this button to home page......................*/}
      <Button color="green"><ArrowCircleRightOutlinedIcon/></Button>

    </Box>
  );
};

export default SuccessPage;
