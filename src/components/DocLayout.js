import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const DRAWER_WIDTH = 280;
const MAX_WIDTH = 1400; // Maximum width of the entire layout

function DocLayout({ children }) {
  const menuItems = [
    { text: 'HomePage', path: '/' },
    { text: 'Work Experience', path: '/work-profile' },
    { text: 'CV', path: '/cv' },
    { text: 'Blogs', path: '/blogs' },
    { text: 'Projects', path: '/projects' },
    { text: 'Hobbies', path: '/hobbies' },
    { text: 'Publications', path: '/publications' },
    { text: 'Contact Me', path: '/contact' },
  ];

  return (
    <Box sx={{ 
      display: 'flex',
      maxWidth: MAX_WIDTH,
      mx: 'auto',
      position: 'relative',
      width: '100%',
      bgcolor: 'background.default',
    }}>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            border: 'none',
            backgroundColor: 'background.paper',
            position: 'relative',
            height: '100vh',
            borderRight: '1px solid rgba(255, 255, 255, 0.12)',
          },
        }}
      >
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>Documentation</Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                component={RouterLink} 
                to={item.path}
                key={item.text}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  justifyContent: 'flex-start',
                  pl: 3,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    '& .MuiTypography-root': {
                      fontSize: '0.95rem',
                      color: 'text.secondary',
                    }
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: 'background.default',
          minHeight: '100vh',
          maxWidth: `calc(${MAX_WIDTH}px - ${DRAWER_WIDTH}px)`,
          width: '100%',
        }}
      >
        <Container 
          maxWidth={false} 
          sx={{ 
            px: 4,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default DocLayout;
