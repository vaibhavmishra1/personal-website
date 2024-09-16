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
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Work Profile
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h6">{exp.role} at {exp.company}</Typography>
          <Typography variant="subtitle2" color="textSecondary">{exp.period}</Typography>
          <Typography variant="body1">{exp.description}</Typography>
        </Box>
      ))}
    </Container>
  );
}

export default WorkProfile;