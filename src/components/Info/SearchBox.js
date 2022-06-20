import React,{useState, useEffect} from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid, Typography, InputAdornment,Box, InputBase, Input } from '@mui/material';
import { GlobalStyles } from '@mui/material';


import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoveiGrid from "./MoveiGrid"

import axios from 'axios';




export default function FreeSolo() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovies(data.results);
  };

  console.log(movies)
useEffect(()=>{
  fetchMovies()
},[])




  return (
    
  <Box sx={{width:'100%', border:'1px solid black'}}>
  <Grid container spacing={1} sx={{backgroundColor:'#151715',p:'1.5em'}}>
    
      <Grid item  pb='1em' xs={12}  sm={8}>
        <Typography color='white'>Collect your favourites</Typography>
      </Grid>

      <Grid item xs={12}  sm={3}>
          <Autocomplete
            size='small'
            freeSolo
            id="free-solo-2-demo"
            options={movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
              focused
              color='primary'
              placeholder='Search title and add to grid'
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  startAdornment:<InputAdornment><SearchOutlinedIcon color='primary'/></InputAdornment>,
                
                  
                }}
                
                
              />
            )}
          />
          
      </Grid>
    </Grid>
    <Box sx={{width:{lg:'90%'}}}><MoveiGrid/></Box>
    </Box>
  );
}

