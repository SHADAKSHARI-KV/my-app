import { Typography } from '@mui/material';
import React from 'react';
import {Box} from '@mui/material';

function Contact() {
  return (
    <Box sx={{ backgroundImage: `url(${require('../Img/—Pngtree—modern double color futuristic neon_1181573.jpg')})`,
    // backgroundSize: 'cover',
    // backgroundColor: 'grey',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '10vh',
    marginLeft:'120px'}}>
      <Typography variant='h2'  color='black' marginRight='485px'><pre>Contact  :</pre></Typography>
      <Typography variant='h3'  color='black' marginRight='65px' ><pre>Email   :kvshadakshari@gmail.com</pre></Typography>
      <Typography variant='h3'  color='black' marginRight='308px'><pre>Phone   :7996757553</pre></Typography>
      <Typography variant='h3'  color='black' marginRight='-20px'><pre>Address :#440 22nd Main, JP Nagar,Mysore</pre></Typography>
      
    </Box>
  )
}

export default Contact;