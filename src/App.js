import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TriangTrail from './components/ProjectsPage/TriangTrail';
import SmartPalette from './components/ProjectsPage/SmartPalette';
import CreativeCode from './components/ProjectsPage/CreativeCode';
import About from './pages/About';
import GlobalFonts from './assets/fonts/fonts';

const Container = styled.div`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
`;

const App = () => {
  return (
      <Router>
        <GlobalFonts />
        <SideBar />
        <Container>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/projects/triangle-trail-status' element={<TriangTrail/>} />
            <Route path='/projects/smart-palette' element={<SmartPalette/>} />
            <Route path='/projects/creative-code' element={<CreativeCode/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </Container>
      </Router>
  );
}

export default App;
