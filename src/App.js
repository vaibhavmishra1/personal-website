// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Hobbies from './pages/Hobbies';
import WorkProfile from './pages/WorkProfile';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <main style={{ paddingTop: '100px' }}> {/* Add padding to prevent overlap */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/work-profile" element={<WorkProfile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </Router>
  );
}

export default App;