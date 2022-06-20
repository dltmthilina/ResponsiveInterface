import { Box, Divider, Paper } from "@mui/material";
import React from "react";

import Header from "../components/Header/Header";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import Info from "./Info/Info";
import SearchBar from "./Info/SearchBar";
import SearchBox from "../components/Info/SearchBox";



import Map from "./Map/Map";
import Contact from "./Contact/Contact";


function Layout() {
  return (
    <div>
      
        <Header />
        <SearchBox/>
        <Contact/>
        <Footer/>
      
    </div>
  );
}

export default Layout;
