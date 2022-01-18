import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import ProjectList from './pages/ProjectList';
import TriangTrail from './components/ProjectsPage/TriangTrail';
import SmartPalette from './components/ProjectsPage/SmartPalette';
import CreativeCode from './components/ProjectsPage/CreativeCode';
import AmbioSense from './components/ProjectsPage/Ambiosense';
import CardinalPride from './components/ProjectsPage/CardinalPride';
import About from './pages/About';
import GlobalFonts from './assets/fonts/fonts';

const Container = styled.div`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
`;

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter={true}>
        <Router >
          <GlobalFonts />
          <SideBar />
          <Container>
            <Navbar />
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/projects/triangle-trail-status' element={<TriangTrail />} />
              <Route path='/projects/smart-palette' element={<SmartPalette />} />
              <Route path='/projects/creative-code' element={<CreativeCode />} />
              <Route path='/projects/ambio-sense' element={<AmbioSense />} />
              <Route path='/projects/cardinal-pride' element={<CardinalPride />} />
            </Routes>
          </Container>
        </Router>
    </AnimatePresence>
  );
}

export default App;
