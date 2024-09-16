// components/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
      <Typography variant="body1">Connect with me:</Typography>
      <IconButton color="inherit" href="https://github.com/yourusername" target="_blank">
        <GitHub />
      </IconButton>
      <IconButton color="inherit" href="https://linkedin.com/in/yourusername" target="_blank">
        <LinkedIn />
      </IconButton>
      <IconButton color="inherit" href="https://twitter.com/yourusername" target="_blank">
        <Twitter />
      </IconButton>
      <IconButton color="inherit" href="https://facebook.com/yourusername" target="_blank">
        <Facebook />
      </IconButton>
      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Your Name
      </Typography>
    </Box>
  );
}

export default Footer;