import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import TriangTrail from './components/ProjectsPage/TriangTrail';
import SmartPalette from './components/ProjectsPage/SmartPalette';
import About from './pages/About';
import Blog from './pages/Blog';
import GlobalFonts from './assets/fonts/fonts';

const App = () => {
  return (
      <Router>
        <GlobalFonts />
        <Navbar />
        <SideBar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/triangle-trail-status' element={<TriangTrail/>} />
          <Route path='/projects/smart-palette' element={<SmartPalette/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </Router>
  );
}

export default App;
