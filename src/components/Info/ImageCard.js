import React from "react";

import { Box, Card, Typography } from "@mui/material";

function ImageCard({ title, image, description }) {
  return (
    <Box
      sx={{
        display: "flex",
        m: "0.5em",
        flexDirection: "column",
        width:{
          xs:'100%',
          sm:'47%',
          md:'45%',
          lg:'30%'
        }, 
        
     
      }}
    >
      <>
        <img src={image} width="100%" height="100%" />
      </>
      <Card sx={{ backgroundColor: "gray", borderRadius: "0", p:'1.5rem', pb:'3em' }}>
        <Typography sx={{color:'white'}}>{title}</Typography>
        <Typography variant="p" sx={{color:'white'}}>{description}</Typography>
        
      </Card>
    </Box>
  );
}

export default ImageCard;
