// src/components/BlogList.js
import React from 'react';
import { blogs } from './BlogData';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import BlogCard from './BlogCard'; // Import the BlogCard component

const BlogList = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#000',
          minHeight: '100vh',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}
        >
          My Blogs
        </Typography>

        {/* Scrollable Blog Section */}
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          {/* Scrollable Cards Container */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'scroll',
              scrollBehavior: 'smooth',
              gap: '20px',
              padding: '10px',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} scrollRef={scrollRef} />
            ))}
          </Box>

          {/* Navigation Arrows */}
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: '#fff',
              color: '#000',
              '&:hover': { backgroundColor: '#ddd' },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: '#fff',
              color: '#000',
              '&:hover': { backgroundColor: '#ddd' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default BlogList;