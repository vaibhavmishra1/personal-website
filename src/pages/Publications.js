// WorkProfile.js
import React from 'react';
import { Typography, Box } from '@mui/material';

function Publications() {
  return (
    <Box sx={{ color: '#fff' }}>
      <Typography variant="h6">My Work Experience</Typography>
      {/* Add your work experience content here */}
      <Typography variant="body1">
        - Data Scientist at XYZ Company
        <br />
        - AI Researcher at ABC Labs
        {/* ...more content */}
      </Typography>
    </Box>
  );
}

export default Publications;