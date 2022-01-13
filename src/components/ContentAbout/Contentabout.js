import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SpeedIcon from '@mui/icons-material/Speed';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Grid from "@mui/material/Grid";

function About() {
  return (
    <>
      <Typography variant="h4" component="h3"  align="center">
             Services 
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={4} md={4} >
            <Card raised >
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom align="center">
              <SpeedIcon style={{color:`#d32f2f`}}/>
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione architecto assumenda ducimus consequuntur doloribus rem, a excepturi.
            </Typography>
          </CardContent>
               </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4} >
            <Card raised >
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom align="center">
              <CleaningServicesIcon style={{color:`#d32f2f`}}/>
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione architecto assumenda ducimus consequuntur doloribus rem, a excepturi.
            </Typography>
          </CardContent>
               </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4} >
            <Card raised >
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom align="center">
              <ArrowDropDownCircleIcon style={{color:`#d32f2f`}} />
            </Typography>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione architecto assumenda ducimus consequuntur doloribus rem, a excepturi.
            </Typography>
          </CardContent>
               </Card>
            </Grid>
        </Grid>
       
    
    </>
  );
}

export default About;