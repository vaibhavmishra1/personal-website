// pages/Gallery.js
import React from 'react';
import { Container, Typography, ImageList, ImageListItem } from '@mui/material';

const images = [
  { img: '/assets/images/photo1.jpg', title: 'Photo 1' },
  { img: '/assets/images/photo2.jpg', title: 'Photo 2' },
  // Add more images
];

function Gallery() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gallery
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default Gallery;