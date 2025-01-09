import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import DocLayout from '../components/DocLayout';
import { Link } from 'react-router-dom';

function Documentation() {
  return (
    <DocLayout>
      <Typography variant="h1" gutterBottom>
        Documentation
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Quick Start
        </Typography>
        <Paper sx={{ p: 3, mb: 3, backgroundColor: '#f8f9fa' }}>
          <Typography variant="body1" component="pre" sx={{ fontFamily: 'monospace' }}>
            {`// Example code
import { someFunction } from 'your-library';

const result = someFunction();
console.log(result);`}
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" paragraph>
          • Feature 1: Description of the first feature
          • Feature 2: Description of the second feature
          • Feature 3: Description of the third feature
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/docs/getting-started"
        sx={{ mt: 2 }}
      >
        Get Started
      </Button>
    </DocLayout>
  );
}

export default Documentation; 