import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <div>
      <div style={{ position: 'absolute', zIndex: '1',backgroundColor:'grey',height:'120vh',width:'11vw' }}>
        <DensitySmallIcon onClick={toggleDrawer(true)}/>
      </div>
      <Drawer variant="temporary" anchor="left" open={isOpen} onClose={toggleDrawer(false)} style={{ zIndex: '2',}}>
        <List style={{ backgroundColor: 'orange', background: 'cover',backgroundImage: `url(${require('../Img/undraw_feeling_proud_qne1.svg')})`,height:'100vh' }}>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/Skills" onClick={toggleDrawer(false)}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button component={Link} to="/About" onClick={toggleDrawer(false)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/Contact" onClick={toggleDrawer(false)}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;