import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Card, Menu, MenuItem, Typography } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import Button from "@mui/material/Button";
import { flexbox } from "@mui/system";

import HeaderImage from "../../assets/images/HeaderImage.jpg";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuItems = [
    "HOME",
    "OUR SCREENS",
    "SCHEDULE",
    "MOVIE LIBRARY",
    "LOCATION & CONTACT",
  ];

  return (
    <Card sx={{backgroundColor:'black',borderRadius:'0'}}>
          <Card
            sx={{
              flexGrow: 1,
              backgroundImage: `url(${HeaderImage})`,
              height:'40vh',
                    
              backgroundRepeat: "no-repeat",
              backgroundSize: '100% 100%',
              
            }}
          >
            <AppBar position="static" color="transparent" >
              <Toolbar
                sx={{
                  display: flexbox,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  
                }}>
                    <Logo />

                       <Box sx={{display:'flex', border:'1px solid white'}}>
                          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', sm:'flex' } }}>
                              {menuItems.map((item) => (
                                <Button
                                  key={item}
                                  onClick={handleClose}
                                  sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                  {item}
                                </Button>
                              ))}
                          </Box>
                          <Menu
                          
                            id="menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClick={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            sx={{
                              display: { xs:'block', sm:'none', lg:'none',md:'none', mt: '45px' },
                            }}
                          >
                            {menuItems.map((item) => {
                              return (
                                <MenuItem key={item} onClick={handleClose} divider>
                                  <Typography textAlign="center" variant="body2">{item}</Typography>
                                </MenuItem>
                              );
                            })}
                          </Menu>

                          <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={openMenu}
                            
                          >
                            <MenuIcon sx={{color:'white'}}/>
                          </IconButton>
                          </Box>
              </Toolbar>
            </AppBar>
          </Card>
          <hr/>
        <Card sx={{border:"1px", backgroundColor:'black', p:'2em 1.5em', maxWidth:'300px', borderRadius:'0'}}>
          <Typography variant="h6" sx={{ color:'white'}}>MOVIE LIBRARY</Typography>
          <Typography variant="body2" sx={{color:'white'}}>
                          Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat,
                sed diam voluptua.
          </Typography>
        </Card>
    </Card>
  );
}
