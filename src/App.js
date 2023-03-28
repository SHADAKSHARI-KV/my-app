import Home from './Components/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import NavbarS from './Components/NavbarS';
import NavbarA from './Components/NavbarA';
import NavbarC from './Components/NavbarC';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<div><Navbar/><Home/></div>} exact />
        <Route path="/Skills" element={<div><NavbarS/><Skills/></div>} />
        <Route path="/Contact" element={<div><NavbarC/><Contact/></div>} />
        <Route path="/About" element={<div><NavbarA/><About/></div>}/>
      
        </Routes>
      </Router>
      
    </div>


   
  );
}

export default App;