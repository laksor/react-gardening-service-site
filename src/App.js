import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/default.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/vendor/modal-video/modal-video.min.css';
import './assets/vendor/slick/slick.css';
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
