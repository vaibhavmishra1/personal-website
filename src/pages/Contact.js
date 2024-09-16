// pages/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" color="primary">Send Message</Button>
      </Box>
    </Container>
  );
}

export default Contact;