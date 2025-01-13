import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const CV = () => {
  const handleDownload = () => {
    // Create a link to your PDF file in the public folder
    const link = document.createElement('a');
    link.href = '/resume_vaibhav_f.pdf';  // Make sure to put your PDF in public folder
    link.download = 'Vaibhav_Mishra_Resume.pdf';  // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ 
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 3,
      pb: 4 
    }}>
      {/* Heading */}
      <Typography 
        variant="h2" 
        component="h1" 
        sx={{ 
          mb: 4,
          fontWeight: 600,
          color: 'primary.main',
          textAlign: 'left',
          fontSize: { xs: '2rem', md: '2.5rem' },
        }}
      >
        CV
      </Typography>

      {/* Download Button */}
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        onClick={handleDownload}
        sx={{
          backgroundColor: '#4a90e2',
          color: 'white',
          '&:hover': {
            backgroundColor: '#357abd',
          },
          mb: 2
        }}
      >
        Download Resume (PDF)
      </Button>

      {/* Resume Image */}
      <Box
        component="img"
        src="/images/resume_photo.png"  // Put your resume image in public folder
        alt="Resume"
        sx={{
          width: '100%',
          maxWidth: '800px',
          height: 'auto',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          },
        }}
      />
    </Box>
  );
};

export default CV;
