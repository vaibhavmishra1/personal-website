// Home.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider, // Import Divider component
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Scroll down icon
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

// Animation Variants for Hover Effect
const hoverEffect = {
  rest: { scale: 1},
  hover: {
    scale: 1.3,
    transition: { duration: 0.3 },
  },
};

function Home() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("accordion-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Helmet>
        <title>Vaibhav | Personal Profile</title>
        <style>{`body { margin: 0; background-color: #000; color: #fff; font-family: 'Arial', sans-serif; }`}</style>
      </Helmet>

      {/* Main Container for Profile and Introduction */}
      <Container
        maxWidth="md"
        sx={{
          minHeight: 'calc(90vh)',
          marginTop: '50px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {/* Profile Picture */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Avatar
            alt="Vaibhav Mishra"
            src="photo.jpg" // Replace with your profile picture path
            sx={{
              width: 250,
              height: 250,
              mb: 8,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            }}
          />
        </motion.div>

        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
            Hello, I'm Vaibhav Mishra
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Data Scientist | Tech Geek | Thinker
          </Typography>
        </motion.div>

        {/* About Section */}
        <motion.div initial="hidden" animate="visible" variants={slideUp}>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, maxWidth: '600px' }}
          >
            I have a passion for building intelligent systems and exploring the
            intersection of technology and finance. With experience in audio
            transcription, AI research, and data science, I aim to create
            solutions that are both impactful and innovative.
          </Typography>
        </motion.div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '80px',
          }}
        >
          <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
          <IconButton onClick={handleScrollDown}>
            <KeyboardArrowDownIcon sx={{ color: '#fff', fontSize: 64 }} />
          </IconButton>
          </motion.div>
        </Box>
      </Container>
      
      {/* New Container for Accordion Section */}
      <Container
        id="accordion-section"
        disableGutters
        maxWidth={false}
        sx={{
          minHeight: '0px',
          marginTop: '-50px',
          width: '100%',
          padding: '16px 0',
        }}
      >
        <Box sx={{ width: '100%' }}>
          {[
            { title: 'Work Profile', component: <WorkProfile /> },
            { title: 'My Resume', component: <Resume /> },
            { title: 'My Blogs', component: <Blogs /> },
            { title: 'Personal Projects', component: <Projects /> },
            { title: 'Hobbies', component: <Hobbies /> },
            { title: 'Contact Me', component: <Contact /> },
            { title: 'Publications', component: <Publications /> },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={hoverEffect}
                initial="rest"
                whileHover="hover"
                animate="rest"
                style={{ marginBottom: '8px' }}
              >
                <Accordion
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    
                  }}
                >
                  <AccordionSummary
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      flexDirection: 'column',
                      gap: '0px',
                      '&:hover': { backgroundColor: '#fff', color: '#000' },
                    }}
                  >
                    <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    {item.component}
                  </AccordionDetails>
                </Accordion>
              </motion.div>

              {/* Add Divider between boxes, except after the last box */}
              {index < 6 && (
                <Divider
                  sx={{
                    backgroundColor: '#fff', // White divider for contrast
                    margin: '8px 0', // Spacing around the divider
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default Home;