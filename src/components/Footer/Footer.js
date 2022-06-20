import { Box, SvgIcon, Typography, Grid, Card } from "@mui/material";
import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Card
      sx={{
        backgroundColor: "black",
        border:'1px solid white',
        color:'white',
        display:'flex',
        flexDirection:'column'
        
      }}>
          <Box sx={{display:'flex',flexWrap:'wrap', width:'100%'}}>
                <Box sx={{border:'1px solid white',width:{xs:'100%', sm:'20%'}}}>
                  <Typography variant="body1">Amadeus IT Group</Typography>
                  <Typography variant="body2">C.Salvador de Madariaga, 1</Typography>
                  <Typography variant="body2">28027 Madrid</Typography>
                  <Typography variant="body2">Spain</Typography>
                </Box>
      
                <Box sx={{border:'1px solid white',display:'flex', flexDirection:'row', width:{xs:'100%',sm:'20%'}}}>
                  <Typography variant="body2" pr="1em">Follow us on</Typography>
                  <Box><TwitterIcon /></Box>
                  <Box ml="0.8em"><YouTubeIcon /></Box>
                </Box>

            </Box>

            <Box sx={{display:'flex',flexWrap:'wrap', width:'100%'}}>
              <Box sx={{width:{xs:'100%', sm:'50%'}}}><Typography>Copyright © 2022 Amadeus Hotels. All rights reserved</Typography></Box>
              <Box sx={{display:'flex', flexDirection:'row', width:{xs:'100%',sm:'40%'}}}><Typography >Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</Typography></Box>
              
            </Box>

            
    </Card>
  );
}

export default Footer;
