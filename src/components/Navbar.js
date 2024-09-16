// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Your Name
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/about">About</Button>
        <Button color="inherit" component={RouterLink} to="/gallery">Gallery</Button>
        <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>
        <Button color="inherit" component={RouterLink} to="/hobbies">Hobbies</Button>
        <Button color="inherit" component={RouterLink} to="/work-profile">Work Profile</Button>
        <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;