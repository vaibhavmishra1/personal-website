// pages/Home.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <Helmet>
        <title>Your Name | Home</title>
        <meta name="description" content="Welcome to my personal homepage." />
      </Helmet>
        <Typography variant="h3" gutterBottom>
          Welcome to My Personal homepage
        </Typography>
        <Typography variant="h5">
          I'm a Computer Science Graduate passionate about technology.
        </Typography>
      </motion.div>
    </Container>
  );
}

export default Home;