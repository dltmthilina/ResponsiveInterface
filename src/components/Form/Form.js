import React,{useState} from "react";

import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Link,
} from "@mui/material";

import { useForm } from "react-hook-form";

function Form() {
const [info, setInfo] = useState();
const { register, handleSubmit, errors } = useForm();

const onSubmit =(data)=>{
  setInfo(data)
  console.log(errors);
}

  return (
    <Box>
      <Card
        style={{
          padding: "0 20px",
          margin: "0 auto",
          color: "white",
          backgroundColor: "transparent",
          borderRadius: "0",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            How reach us
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <label>First Name*</label>
                <TextField
                  sx={{
                    backgroundColor: "gray",
                  }}
                  name='fname'
                  focused
                  variant="standard"
                  fullWidth
                  required
                  size="small"
                  {...register("fname",{
                    required:'Required'
                  })}
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <label>Last Name*</label>
                <TextField
                  name="lname"
                  sx={{
                    backgroundColor: "gray",
                  }}
                  focused
                  variant="standard"
                  fullWidth
                  required
                  size="small"
                  {...register("lname",{
                    required:'Required'
                  })}
                />
              </Grid>

              <Grid item xs={12}>
                <label>Email*</label>
                <TextField
                  name="email"
                  sx={{
                    backgroundColor: "gray",
                  }}
                  focused
                  type='email'
                  variant="standard"
                  fullWidth
                  required
                  size="small"
                  {...register("email",{
                    required:'Required'
                  })}
                  
                />
              </Grid>

              <Grid item xs={12}>
                <label>Telephone</label>
                <TextField
                  name="telephone"
                  sx={{
                    backgroundColor: "gray",
                  }}
                  focused
                  type="number"
                  variant="standard"
                  fullWidth
                  required
                  size="small"
                  
                  
                />
              </Grid>

              <Grid item xs={12}>
                <label>Message</label>
                <TextField
                  name="message"
                  sx={{
                    backgroundColor: "gray",
                  }}
                  focused
                  multiline
                  rows={4}
                  variant="standard"
                  fullWidth
                  required
                  size="small"
               
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    sx={{ fontSize: "8px" }}
                    control={
                      <Checkbox
                        defaultChecked
                        defaultValue={false}
                      />
                    }
                    label="I agree to the"
                  />
                </FormGroup>
                <Link href="">Terms & Conditions</Link>
              </Grid>

                  
            </Grid>
            <Box sx={{width:'100%'}}>
            <Button
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{
                      fontSize:'12px',
                      width:'20em',
                      position:'relative',
                      left:{sm:'65%', xs:'15%', lg:'45%'}
                    }}

                  >
                    Submit
                  </Button>
                </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Form;
