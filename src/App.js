import './App.css';
import React from 'react';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Home from './components/home';
import Results from './components/results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
