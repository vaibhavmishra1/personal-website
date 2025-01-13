// pages/WorkProfile.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const experiences = [
  {
    company: 'Tech Corp',
    role: 'Software Engineer',
    period: '2022 - Present',
    description: 'Developing web applications using React and Node.js.',
  },
  // Add more experiences
];

function WorkProfile() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          mb: 4,  // margin bottom
          fontWeight: 600,  // make it bold
          color: 'primary.main',  // use your theme's primary color
          textAlign: 'left',  // align left
          fontSize: { xs: '2rem', md: '2.5rem' },  // responsive font size
        }}
      >
        Work Profile
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h6">{exp.role} at {exp.company}</Typography>
          <Typography variant="subtitle2" color="textSecondary">{exp.period}</Typography>
          <Typography variant="body1">{exp.description}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default WorkProfile;