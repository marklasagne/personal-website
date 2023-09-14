// Personal website and portfolio //
// 2022                           //
// Built by Mark Lisanti          //
// https://github.com/marklasagne //

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer.js';
import TriangleTrailStatus from './pages/projects/TriangleTrailStatus.js';
import SmartPalette from './pages/projects/SmartPalette.js';
import AmbieSense from './pages/projects/AmbieSense.js';
import AudioVisualizer from './pages/projects/AudioVisualizer.js';
import LifesAGame from './pages/projects/LifesAGame.js';
import CardinalPride from './pages/projects/CardinalPride.js';
import Jobzen from './pages/projects/Jobzen.js';
import Affinity from './pages/projects/Affinity.js';
import FuckYou from './pages/projects/FuckYou.js';
import BoulderParks from './pages/projects/BoulderParks.js';
import Nihilism from './pages/projects/Nihilism.js';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';

const App = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter >
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Home />} />
            <Route path='/projects/triangle-trail-status' element={<TriangleTrailStatus />} />
            <Route path='/projects/smart-palette' element={<SmartPalette />} />
            <Route path='/projects/ambie-sense' element={<AmbieSense />} />
            <Route path='/projects/audio-visualizer' element={<AudioVisualizer />} />
            <Route path='/projects/lifes-a-game' element={<LifesAGame />} />
            <Route path='/projects/cardinal-pride' element={<CardinalPride />} />
            <Route path='/projects/jobzen' element={<Jobzen />} />
            <Route path='/projects/affinity' element={<Affinity />} />
            <Route path='/projects/fuck-you-sign' element={<FuckYou />} />
            <Route path='/projects/boulder-parks' element={<BoulderParks />} />
            <Route path='/projects/nihilism' element={<Nihilism />} />
          </Routes>
          <Footer />
        </Router>
      </AnimatePresence>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    -webkit-overflow-scrolling: touch;
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
