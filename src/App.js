// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocLayout from './components/DocLayout';
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import WorkProfile from './pages/WorkProfile';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import CV from './pages/cv';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import { Box } from '@mui/material';

function App() {
  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: Update URL without page reload
          const sectionId = entry.target.id;
          window.history.replaceState({}, '', `#${sectionId}`);
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the section is visible
    });

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Box sx={{ 
        display: 'flex',
        minHeight: '100vh',
        position: 'relative',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Shine elements */}
        <div className="shine-element"></div>
        <div className="shine-element"></div>
        
        <DocLayout>
          <Box 
            sx={{ 
              mt: 6,
              flex: 1,
              overflowY: 'auto',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '100%',
              margin: 0,
              padding: 0,
              '& section': {
                minHeight: '100vh',
                scrollMarginTop: '64px',
                padding: '0px',
                width: '100%',
                maxWidth: '800px',
                marginLeft: 0,
                marginRight: 'auto',
              }
            }}
          >
            <section id="home">
              <Home />
            </section>
            <section id="work-profile">
              <WorkProfile />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="publications">
              <Publications />
            </section>
            
            <section id="blogs">
              <Blogs />
            </section>
            
            <section id="cv">
              <CV />
            </section>
            <section id="hobbies">
              <Hobbies />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </Box>
        </DocLayout>
      </Box>
    </Router>
  );
}

export default App;