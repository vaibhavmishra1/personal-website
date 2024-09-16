// pages/About.js
import React from 'react';
import { Container, Typography, Avatar, Grid } from '@mui/material';

function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Avatar
            alt="Your Name"
            src="/assets/images/your-photo.jpg"
            sx={{ width: 200, height: 200, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            [Write about your background, education, interests, etc.]
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;