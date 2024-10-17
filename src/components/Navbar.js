// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const slideDown = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

function Navbar() {
  return (
    <motion.div initial="hidden" animate="visible" variants={slideDown}>
      <AppBar
        position="fixed" // Ensure the navbar is fixed at the top
        sx={{
          backgroundColor: '#000',
          height: '100px',
          zIndex: 1201, // Ensure it stays above other content
          top: 0, // Explicitly set top to 0
        }}
      >
        <Toolbar
          sx={{
            minHeight: '100px',
            padding: '0 24px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              marginLeft: '50px',
              color: '#fff',
            }}
          >
            Veni, vidi, vici!
          </Typography>

          {/* Buttons Group */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px', // Space between buttons
            }}
          >
            {['Home', 'About', 'Gallery', 'Blog', 'Hobbies', 'Work Profile', 'Contact'].map((text, index) => (
              <Button
                key={index}
                color="inherit"
                component={RouterLink}
                to={`/${text.replace(' ', '-').toLowerCase()}`}
                sx={{
                  fontSize: '15px',
                  '&:hover': { backgroundColor: '#fff', color: '#000' },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default Navbar;