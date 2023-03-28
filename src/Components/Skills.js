import React from 'react';
import { Typography } from '@mui/material';
import {Box} from '@mui/material';

import { Rating } from '@material-ui/lab';


function Skills() {
  return (
    <Box sx={{ backgroundImage: `url(${require('../Img/undraw_feeling_proud_qne1.svg')})`,
    backgroundSize: 'cover',
    backgroundColor:'grey',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    marginLeft:'110px'}}>
      <Typography variant='h3' color='black'><button>Sql</button>  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Typography> 
      <Typography variant='h3' color='black' ><button>Java</button> <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Typography>
      <Typography variant='h3' color='black' ><button>Python</button> <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Typography>
      <Typography variant='h3' color='black'  ><button>Html</button> <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Typography>
      <Typography variant='h3' color='black'  ><button>Css</button> <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Typography>
      <Typography variant='h3' color='black'  ><button>Javascript</button> <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Typography>
      <Typography variant='h3' color='black'  ><button>React</button> <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></Typography>
    </Box>
    
  )
}

export default Skills;