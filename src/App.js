import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar.js';
import SideBar from './components/SideBar/SideBar.js';
import ProjectList from './pages/ProjectList.js';
import TriangleTrailStatus from './pages/projects/TriangleTrailStatus.js';
import SmartPalette from './pages/projects/SmartPalette.js';
import AmbieSense from './pages/projects/AmbieSense.js';
import About from './pages/About';
import { createGlobalStyle } from 'styled-components';


const App = () => {
  return (
    <>
    <AnimatePresence exitBeforeEnter={true}>
      <GlobalStyle />
      <Router >
        <SideBar />
          <Navbar />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<ProjectList />} />
            <Route path='/projects/triangle-trail-status' element={<TriangleTrailStatus />} />
            <Route path='/projects/smart-palette' element={<SmartPalette />} />
            <Route path='/projects/ambio-sense' element={<AmbieSense />} />
          </Routes>
      </Router>
    </AnimatePresence>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto';
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  body {
    overflow-x: hidden !important;
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0 1rem 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0 1rem 0;
  }

`;

export default App;
