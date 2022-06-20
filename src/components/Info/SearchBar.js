import { Card, Box, Typography, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactSearchBox from 'react-search-box';

import MoveiGrid from "./MoveiGrid";

function SearchBar() {
  const [movies, setMovies] = useState([]);
  const [sugestions, setSuggesions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [text, setText] = useState("");

  const selectedMovies = [];

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const titleHandler = (title) => {
    setSuggesions([]);
    setText("");
    setSelected(title);
    console.log("rerendering in titleHandler");
  };

  const onChangeHandler = (e) => {
    let matches = [];
    if (text.length > 0) {
      matches = movies.filter((m) => {
        const regex = new RegExp(`${text}`, "gi");
        return m.title.match(regex);
      });
    }
    setSuggesions(matches);
    setText(e.target.value);
    setSelected([]);
    console.log("rerendering in onchangeHandler");
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: {
            xs: "100%",
          },
        }}
      >
        <Box>
        
          <input
            type="text"
            onChange={onChangeHandler}
            value={text}
            style={{ width: "100%" }}
          />

        </Box>

        {sugestions &&
          sugestions.map((s, i) => (
            <Card
              sx={{ width: "100%", borderRadius: "0" }}
              key={i}
              onClick={() => titleHandler(s.title)}
            >
              {s.title}
            </Card>
          ))}
      </Box>
    </Box>
  );
}

export default SearchBar;
