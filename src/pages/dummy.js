// Home.js
import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Import your section components
import WorkProfile from './WorkProfile';
import Resume from './Resume';
import Blogs from './Blogs';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Contact from './Contact';
import Publications from './Publications';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2.2 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const listRef = useRef(null);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('accordion-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // The list of items without empty entries for better responsiveness
  const items = [
    { title: 'Work Profile', component: <WorkProfile /> },
    { title: 'My Resume', component: <Resume /> },
    { title: 'My Blogs', component: <Blogs /> },
    { title: 'Personal Projects', component: <Projects /> },
    { title: 'Hobbies', component: <Hobbies /> },
    { title: 'Contact Me', component: <Contact /> },
    { title: 'Publications', component: <Publications /> },
  ];

  // State to track the item in focus
  const [inFocusIndex, setInFocusIndex] = useState(3); // Start with the fourth element (index 3)

  useEffect(() => {
    const listElement = listRef.current;

    const handleScroll = () => {
      if (listElement) {
        const listItems = Array.from(listElement.children);
        const boxRect = listElement.getBoundingClientRect();
        let closestIndex = 0;
        let minDistance = Infinity;

        listItems.forEach((item, index) => {
          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.top + itemRect.height / 2;
          const distance = Math.abs(boxRect.top + boxRect.height / 2 - itemCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        setInFocusIndex(closestIndex);
      }
    };

    const scrollToInitialItem = () => {
      if (listElement) {
        const listItems = Array.from(listElement.children);
        const initialItem = listItems[3]; // Fourth element (index 3)

        if (initialItem) {
          // Calculate the position to center the initial item
          const listRect = listElement.getBoundingClientRect();
          const itemRect = initialItem.getBoundingClientRect();

          const offset =
            initialItem.offsetTop -
            listElement.offsetTop -
            listRect.height / 2 +
            itemRect.height / 2;

          listElement.scrollTo({
            top: offset,
            behavior: 'smooth', // Smooth scroll to initial item
          });
        }
      }
    };

    const listElementCurrent = listElement;
    if (listElementCurrent) {
      listElementCurrent.addEventListener('scroll', handleScroll);
      // Scroll to the fourth item when component mounts
      scrollToInitialItem();
      // Initial call to set the focus index
      handleScroll();
    }

    return () => {
      if (listElementCurrent) {
        listElementCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Vaibhav | Personal Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html, body, #root {
            height: 100%;
            margin: 0;
          }
          body {
            background-color: #000;
            color: #fff;
            font-family: 'Arial', sans-serif;
            scroll-behavior: smooth;
          }
        `}</style>
      </Helmet>

      {/* Parent container with scroll snapping */}
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
        }}
      >
        {/* Main Container for Profile and Introduction */}
        <Container
          id="main-section"
          maxWidth="md"
          sx={{
            minHeight: '100vh',
            scrollSnapAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: { xs: '30px 20px', sm: '50px 40px' }, // Responsive padding
          }}
        >
          {/* Profile Picture */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Avatar
              alt="Vaibhav Mishra"
              src="photo.jpg" // Replace with your profile picture path
              sx={{
                width: { xs: 150, sm: 200, md: 250 }, // Responsive sizes
                height: { xs: 150, sm: 200, md: 250 },
                mb: { xs: 4, sm: 6, md: 8 },
                mt: { xs: -5, sm: -7, md: -10 },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
              }}
            />
          </motion.div>

          {/* Header Section */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' }, // Responsive font sizes
              }}
            >
              Welcome, I'm Vaibhav Mishra
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' }, // Responsive font sizes
              }}
            >
              Data Scientist | Tech Geek | Thinker
            </Typography>
          </motion.div>

          {/* About Section */}
          <motion.div initial="hidden" animate="visible" variants={slideUp}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                maxWidth: { xs: '90%', sm: '80%', md: '1200px' }, // Responsive maxWidth
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font sizes
              }}
            >
              If there were a word to embody a tech enthusiast, a thinker, a maverick, and a creative spirit all at once, it would surely be my namesake. I engineer simplicity, crafting innovations that make life's complexities elegantly effortless.

              When I'm not immersed in creation, my System 2—a nod to Daniel Kahneman's <i>Thinking, Fast and Slow</i>—ventures into the vast realms of intelligence. I ponder its origins and existence, the intricate dance between the biological and the artificial, its diverse forms and expressions, the interplay among different intelligences, and its infinite evolution across the tapestry of time.

              Meanwhile, I indulge my System 1—the intuitive, spontaneous self—with life's simple pleasures: the exhilaration of wind rushing past as I ride my bike, the soul-stirring melodies of great music, the invigorating rhythm of a volleyball game.

              This website is my canvas—a place where I weave together my thoughts, ideas, and creations into a cohesive narrative. It's a journey inward, a means to reflect upon my path and understand myself from a broader perspective.
            </Typography>
          </motion.div>

          {/* Scroll Down Icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: { xs: '20px', sm: '40px', md: '60px' }, // Responsive padding
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <IconButton onClick={handleScrollDown}>
                <KeyboardArrowDownIcon
                  sx={{
                    color: '#fff',
                    fontSize: { xs: 48, sm: 56, md: 64 }, // Responsive icon sizes
                  }}
                />
              </IconButton>
            </motion.div>
          </Box>
        </Container>

        {/* Accordion Section */}
        <Container
          id="accordion-section"
          disableGutters
          maxWidth={false}
          sx={{
            minHeight: '100vh',
            scrollSnapAlign: 'start',
            width: '100%',
            backgroundColor: '#000', // Black background
            padding: { xs: '16px 10px', sm: '16px 20px', md: '16px 40px' }, // Responsive padding
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '80%', md: '100%' }, // Responsive widths
              maxWidth: { xs: '400px', sm: '600px', md: '1400px' }, // Responsive maxWidth
              backgroundColor: '#fff', // White box
              padding: { xs: '16px', sm: '24px', md: '32px' }, // Responsive padding
              borderRadius: { xs: '8px', sm: '12px', md: '16px' }, // Responsive border radius
              boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative', // For positioning the back button
            }}
          >
            {selectedItem ? (
              // Display the selected item's content
              <Box sx={{ width: '100%' }}>
                <IconButton
                  onClick={() => setSelectedItem(null)}
                  sx={{
                    position: 'absolute',
                    top: { xs: 8, sm: 16 },
                    right: { xs: 8, sm: 16 },
                  }}
                >
                  <Typography variant="body2">Back</Typography>
                </IconButton>
                {selectedItem.component}
              </Box>
            ) : (
              // Display the scrollable list
              <List
                ref={listRef}
                sx={{
                  color: '#000',
                  width: '100%',
                  maxHeight: '60vh',
                  overflowY: 'auto',
                  scrollSnapType: 'y mandatory',
                  scrollBehavior: 'smooth',
                  padding: 0, // Remove default padding
                  margin: 0, // Remove default margin
                  scrollbarWidth: 'none', // Firefox
                  msOverflowStyle: 'none', // IE and Edge
                  '&::-webkit-scrollbar': {
                    display: 'none', // Webkit browsers
                  },
                }}
              >
                {items.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      button={inFocusIndex === index && item.component !== null} // Only focused & has component is clickable
                      onClick={() => inFocusIndex === index && handleItemClick(item)}
                      sx={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: { xs: '16px 0', sm: '20px 0', md: '24px 0' }, // Responsive padding
                        scrollSnapAlign: 'center',
                        cursor: inFocusIndex === index && item.component !== null ? 'pointer' : 'default',
                        transition: 'background-color 0.3s, color 0.3s',
                        borderRadius: '4px',
                        background:
                          inFocusIndex === index && item.component !== null
                            ? 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' // Focused & Clickable
                            : item.component
                            ? 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' // Non-Focused & Clickable
                            : 'linear-gradient(135deg, #d3d3d3 0%, #c0c0c0 100%)', // Non-Clickable
                        '&:hover': {
                          background:
                            inFocusIndex === index && item.component !== null
                              ? 'linear-gradient(135deg, #e0b3d6 0%, #fcb3a2 100%)' // Hover for Focused & Clickable
                              : 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', // No change for others
                        },
                        opacity: item.component ? (inFocusIndex === index ? 1 : 0.5) : 0.5, // Adjust opacity
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          variant: 'h6',
                          sx: {
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }, // Responsive font sizes
                            opacity: inFocusIndex === index ? 1 : 0.5, // Adjust opacity based on focus
                            transition: 'font-size 0.3s, opacity 0.3s', // Smooth transition for size and opacity
                          },
                        }}
                      />
                    </ListItem>

                    {/* Add Divider between items, except after the last item */}
                    {index < items.length - 1 && item.title && (
                      <Divider
                        sx={{
                          backgroundColor: '#ccc',
                          margin: { xs: '8px 0', sm: '12px 0' }, // Responsive margin
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </List>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;