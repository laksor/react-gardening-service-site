import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/vendor/modal-video/modal-video.min.css';
import './assets/vendor/slick/slick.css';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact  element={<About />} />
            <Route path="/contact" exact  element={<Contact />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaLevelUpAlt />} />    
    </Router>
  );
}

export default App;
