import { Grid, Box } from '@mui/material'
import React from 'react'
import Form from '../Form/Form'
import Map from '../Map/Map'


function Contact() {
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:'space-evenly', backgroundColor:'black', alignItems:'center'}}>
      
            <Box  sx={{width:{xs:'100%', sm:'100%', lg:'40%'}}}>
               <Form/>
            </Box>
            <Box  sx={{width:{xs:'100%', sm:'100%', lg:'40%'}}}>
                <Map/>
            </Box>
       
    </div>
  )
}

export default Contact