import React, { useEffect } from "react";

import { Card, Grid, Typography, Paper, Box } from "@mui/material";
import SearchBar from "./SearchBar";
import { Container } from "@mui/system";

import Batman from "../../assets/images/Batman.jpg";
import Spiderman from "../../assets/images/Spiderman.jpg";


function Info() {

  return (
    <div
      style={{
        backgroundColor: "bisque",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      <Container
        sx={{
          opacity: "1",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ m: "1em" }}>Collect your favourites</Typography>
        <SearchBar />
        </Container>

      
      
    </div>
  );
}

export default Info;
