import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, ImageList, ImageListItem, Typography, } from '@mui/material';
import pic from '../Img/pic.jpg';
import Avatar from '@material-ui/core/Avatar';


function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' ,backgroundImage: `url(${require('../Img/—Pngtree—modern double color futuristic neon_1181573.jpg')})`,backgroundSize:'cover',height:'100vh',marginLeft:'140px',width:'90vw'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' ,flex:'1'}}>
         <Box  >
         <ImageList sx={{transform: 'scale(7)',paddingBottom:'1px',paddingLeft:'90px',paddingTop:'50px'}} >
          <ImageListItem >
          <Avatar alt="Pic" src={pic} />
          </ImageListItem>
         </ImageList>
         <ImageList sx={{transform: 'scale(1.7)',paddingBottom:'70px',paddingLeft:'110px',paddingTop:'100px'}} >
          <ImageListItem >
          </ImageListItem>
         </ImageList>
         </Box>
         <footer>
        <ImageList sx={{ display: 'flex',paddingTop: '130px',paddingLeft:'190px', transform: 'scale(3)'}}>
          <ImageListItem sx={{paddingRight:'20px'}}>
          <Button variant="contained" startIcon={<GitHubIcon />}>
      <a href='https://github.com/SHADAKSHARI-KV'></a>
    </Button>
          </ImageListItem>
          <ImageListItem sx={{paddingRight:'20px'}}>
          <Button variant="contained" startIcon={<LinkedInIcon />}>
<a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEw-P0lVeNJYwAAAYbvMZr4u3PpfuK_13AAucti54FHXdFVW4EoN8-zJW750E2VOLP2oZmoJrwORYJEXYGC0yFghY7mX1m4kg7MLQI_lC8BABtmPqnqc2UER9s_tCNaLYipcZ0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshadakshari-swamy-k-v-ab584421a"></a>
    </Button>
          </ImageListItem>
          <ImageListItem >
          <Button variant="contained" startIcon={<InstagramIcon />}>
<a href='https://www.instagram.com/___punith_____/?igshid=ZDdkNTZiNTM%3D'></a>
    </Button>
          </ImageListItem>
        </ImageList>
        </footer>
      </Box>
      <Box sx={{justifyContent:'center',alignItems:'center',marginLeft:'60px',marginRight:'100px',marginTop:'0px'}}>
       <Typography variant='h1' color={'orange'}><pre>SHADAKSHARI</pre></Typography> 
        <Typography variant='h2'>I'm a</Typography> 
        <Typography variant='h2'><pre>React developer</pre></Typography>
      </Box>
    </Box>
  );
}
export default Home;






