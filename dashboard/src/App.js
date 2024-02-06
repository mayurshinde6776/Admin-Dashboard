import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Setting from './pages/Setting';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="setting" element={<Setting />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
