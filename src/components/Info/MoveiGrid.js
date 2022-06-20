import React,{useEffect, useState} from 'react'
import { Box } from '@mui/system';
import axios from 'axios';

import ImageCard from './ImageCard';
import Batman from "../../assets/images/Batman.jpg";
import Spiderman from "../../assets/images/Spiderman.jpg";

let selectedTitle;
const films = [
    {
      title: "Batman Returns",
      image: Batman,
      description:"Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
    },
  
    {
      title: "The Amazin Spiderman",
      image: Spiderman,
      description:"Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
    },
    {
      title: "The Amazin Spiderman",
      image: Spiderman,
      description:"Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
    },
  ];


function MoveiGrid({selectedMovie, movies}) {

  console.log(movies)

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", p: "2rem", backgroundColor:'#151715', border:'1px solid white' }}>
              {films.map((m) => (
                <ImageCard title={m.title} image={m.image} key={m.id} description={m.description}/>
              ))}
          </Box>
  )
}

export default MoveiGrid