
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';


const App = () => {
  return (
    <div style={{
      width: "1000px",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <Router>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
