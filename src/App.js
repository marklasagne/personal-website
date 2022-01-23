// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import SideBar from './components/SideBar.js';
import ProjectList from './pages/ProjectList.js';
import TriangleTrailStatus from './pages/projects/TriangleTrailStatus.js';
import SmartPalette from './pages/projects/SmartPalette.js';
import AmbieSense from './pages/projects/AmbieSense.js';
import AudioVisualizer from './pages/projects/AudioVisualizer.js';
import GameOfLife from './pages/projects/GameOfLife.js';
import CardinalPride from './pages/projects/CardinalPride.js';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop.js';
import { createGlobalStyle } from 'styled-components';
import { PageContainer, ContentWrap } from './components/PageComponents';

const App = () => {

  return (
    <>
    <AnimatePresence exitBeforeEnter={true}>
      <GlobalStyle />
      <PageContainer>
      <Router>
        <ScrollToTop>
        <SideBar />
        <Navbar />
        <ContentWrap>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<ProjectList />} />
            <Route path='/projects/triangle-trail-status' element={<TriangleTrailStatus />} />
            <Route path='/projects/smart-palette' element={<SmartPalette />} />
            <Route path='/projects/ambie-sense' element={<AmbieSense />} />
            <Route path='/projects/audio-visualizer' element={<AudioVisualizer />} />
            <Route path='/projects/game-of-life-visualization' element={<GameOfLife />} />
            <Route path='/projects/cardinal-pride' element={<CardinalPride />} />
          </Routes>
          </ContentWrap>
          <Footer />
          </ ScrollToTop>
      </Router>
      </ PageContainer>
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
    padding-bottom: 2.5rem;
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
