// src/components/Resume.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function Resume() {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: { xs: '20px', sm: '40px', md: '60px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        color="#000"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        My Resume
      </Typography>
      <Box
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          boxShadow: 3,
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/resume_photo.png`}
          alt="My Resume"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      {/* Download Button */}
      <Button
        variant="contained"
        color="primary"
        href={`${process.env.PUBLIC_URL}/resume_vaibhav_f.pdf`}
        download
        sx={{ marginTop: '20px' }}
        startIcon={<DownloadIcon />}
      >
        Download Resume (PDF)
      </Button>
    </Box>
  );
}

export default Resume;