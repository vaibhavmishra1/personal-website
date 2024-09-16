// pages/Hobbies.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const hobbies = [
  { name: 'Photography', description: 'Capturing moments through the lens.' },
  { name: 'Coding', description: 'Building applications and solving problems.' },
  // Add more hobbies
];

function Hobbies() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        My Hobbies
      </Typography>
      <List>
        {hobbies.map((hobby, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={hobby.name}
              secondary={hobby.description}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Hobbies;