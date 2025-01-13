// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DocLayout from './components/DocLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Hobbies from './pages/Hobbies';
import WorkProfile from './pages/WorkProfile';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import CV from './pages/cv';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Shine elements */}
        <div className="shine-element"></div>
        <div className="shine-element"></div>
        
        <DocLayout>
          <Box sx={{ mt: 6 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/work-profile" element={<WorkProfile />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </Box>
        </DocLayout>
      </Box>
    </Router>
  );
}

export default App;