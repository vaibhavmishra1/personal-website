import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DRAWER_WIDTH = 280;

const DocLayout = ({ children }) => {
  const menuItems = [
    { title: 'Getting Started', path: '/docs/getting-started' },
    { title: 'Installation', path: '/docs/installation' },
    { title: 'Quick Start', path: '/docs/quick-start' },
    { title: 'API Reference', path: '/docs/api' },
    { title: 'Examples', path: '/docs/examples' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            border: 'none',
            backgroundColor: '#f8f9fa',
          },
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0' }}>
          <Typography variant="h6" color="primary">
            Documentation
          </Typography>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              component={Link}
              to={item.path}
              key={item.path}
              sx={{
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                },
              }}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${DRAWER_WIDTH}px`,
          maxWidth: '850px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DocLayout; 