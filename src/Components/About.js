import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';

export default About;

function About() {

    const CO= "Career Objective:"
    const aboutus= "To learn and function effectively in an organization where I would be able to utilize my capabilities to deliver the bottom line and in the process add value to the organization and  my career"

    return(
        <Box sx={{height:'100vh',justifyContent:'center',alignItems:'center',backgroundSize: 'cover',paddingTop:'10px',marginLeft:'135px'}}>
        <Typography variant='h4' color={'white'} sx={{marginLeft:'10px'}}>
        {CO}
        </Typography>
        <Typography variant='h4' sx={{marginLeft:'10px'}} color={'Black'}>
          {aboutus}
        </Typography>
        </Box>
    )
}
