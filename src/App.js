import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { FaLevelUpAlt } from "react-icons/fa";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Services from './pages/Services';
import Project from './pages/Project';
import Blog from './pages/Blogs';
import Error from './pages/Error';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/vendor/modal-video/modal-video.min.css';
import './assets/vendor/slick/slick.css';
import ServiceDetails from './pages/ServiceDetails';



function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact  element={<About />} />
            <Route path="/services" exact  element={<Services />} />
            <Route path="/service-details" exact  element={<ServiceDetails />} />
            <Route path="/projects" exact  element={<Project />} />
            <Route path="/blogs" exact  element={<Blog />} />
            <Route path="/faq" exact  element={<Faq />} />
            <Route path="/contact" exact  element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaLevelUpAlt />} />    
    </Router>
  );
}

export default App;
