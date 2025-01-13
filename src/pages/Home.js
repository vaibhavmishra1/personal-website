// pages/Home.js
import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import CodeIcon from '@mui/icons-material/Code';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BuildIcon from '@mui/icons-material/Build';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Documentation | Home</title>
        <meta name="description" content="Welcome to the documentation." />
      </Helmet>
      

      {/* Hero Section */}
      <Box sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
        <Typography variant="h2" gutterBottom align="center">
          VAIBHAV 
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }} align="center">
          MultiModal AI | Agentic AI for Games | Graph Theory | Computer Vision | NLP | Large Foundation Models
        </Typography>
        
      </Box>

      {/* Social Links Section */}
      <Box sx={{ mb: 6, maxWidth: '800px', mx: 'auto', display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant="contained"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }
          }}
        >
          GitHub
        </Button>
        <Button
          variant="contained" 
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }
          }}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }
          }}
        >
          Twitter
        </Button>
        <Button
          variant="contained"
          href="mailto:your.email@example.com"
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }
          }}
        >
          Email
        </Button>
        <Button
          variant="contained"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }
          }}
        >
          Google Scholar
        </Button>
      </Box>

      {/* Image Block */}
      <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h7" gutterBottom align="left" sx={{ mb: 4 }}>
            Recent Project : Training RL Agents on Unity Games using Imitation Learning
          </Typography>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
              display: 'block',
              mt: 2
            }}
            src="download.png"
            alt="Profile"
          />
        </Paper>
      </Box>

      {/* Code Example */}
      <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom align="left">
            
          </Typography>
          <Box
            component="pre"
            sx={{
              backgroundColor: 'background.paper',
              p: 2,
              borderRadius: 1,
              overflow: 'auto',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              '& code': {
                fontSize: '15px !important',
                lineHeight: '1.6',
              }
            }}
          >
            <code style={{ 
              fontSize: '15px', 
              display: 'block',
              lineHeight: '1.6'
            }}>
              If there were a word to embody a tech enthusiast, a thinker, a maverick, and a creative spirit all at once, it would surely be my namesake.

              I engineer simplicity, crafting innovations that make life's complexities elegantly effortless.

              When I'm not immersed in creation, my System 2—a nod to Daniel Kahneman's Thinking, Fast and Slow—ventures into the vast realms of intelligence. I ponder its origins and existence, the intricate dance between the biological and the artificial, its diverse forms and expressions, the interplay among different intelligences, and its infinite evolution across the tapestry of time.

              Meanwhile, I indulge my System 1—the intuitive, spontaneous self—with life's simple pleasures: the exhilaration of wind rushing past as I ride my bike, the soul-stirring melodies of great music, the invigorating rhythm of a volleyball game.

              This website is my canvas—a place where I weave together my thoughts, ideas, and creations into a cohesive narrative. It's a journey inward, a means to reflect upon my path and understand myself from a broader perspective.
            </code>
          </Box>
        </Paper>
      </Box>

    </motion.div>
  );
}

export default Home;