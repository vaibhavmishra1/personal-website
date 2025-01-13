import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DRAWER_WIDTH = 200;
const MAX_WIDTH = 1400; // Maximum width of the entire layout

function DocLayout({ children }) {
  const menuItems = [
    { text: 'HomePage', id: 'home' },
    { text: 'Work Experience', id: 'work-profile' },
    { text: 'Projects', id: 'projects' },
    { text: 'Publications', id: 'publications' },
    { text: 'Blogs', id: 'blogs' },
    { text: 'CV', id: 'cv' },
    { text: 'Hobbies', id: 'hobbies' },
    { text: 'Contact Me', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Box sx={{ 
      display: 'flex',
      width: '100%',
      maxWidth: MAX_WIDTH,
      margin: '0 auto',
      position: 'relative',
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
            bgcolor: 'background.paper',
            position: 'fixed',
            height: '100vh',
            left: '50%',
            transform: `translateX(${-MAX_WIDTH / 2}px)`,
            borderRight: 'none',
          },
        }}
      >
        <Box sx={{ 
          p: 0, 
          textAlign: 'left',
          borderRight: 'none',
          borderLeft: 'none',
        }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>Documentation</Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                onClick={() => scrollToSection(item.id)}
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
      
      <Box component="main" sx={{ 
        flexGrow: 1,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: `calc((${DRAWER_WIDTH}px)/2)`,
        padding: '40px',
        border: 'none',
      }}>
        {children}
      </Box>
    </Box>
  );
}

export default DocLayout;
