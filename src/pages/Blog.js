// pages/Blog.js
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const posts = [
  {
    title: 'My Journey in Computer Science',
    date: '2024-01-01',
    excerpt: 'An overview of my experiences and learnings...',
  },
  // Add more posts
];

function Blog() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      {posts.map((post, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="body1">{post.excerpt}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Blog;