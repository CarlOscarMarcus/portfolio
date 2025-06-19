import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Startups from './pages/Startups';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="startups/:company" element={<Startups />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
