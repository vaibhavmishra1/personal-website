// src/components/BlogCard.js
import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, scrollRef }) => {
  const [rootElement, setRootElement] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    root: rootElement,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (scrollRef.current) {
      setRootElement(scrollRef.current);
    }
  }, [scrollRef]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.10 }}
      animate={{ scale: inView ? 1.1 : 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card
        sx={{
          position: 'relative',
          minWidth: 350,
          maxWidth: 340,
          minHeight: 500,
          margin: '20px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
        }}
      >
        <CardActionArea
          component={Link}
          to={`${blog.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            sx={{
              height: 500,
              backgroundImage: `url(${blog.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.8,
              filter: 'brightness(0.7)',
            }}
          />
          <CardContent
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {blog.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export default BlogCard;