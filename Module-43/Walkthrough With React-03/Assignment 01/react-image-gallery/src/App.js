import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import SingleImage from './Components/SingleImage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/image/:id" element={<SingleImage />} />
      </Routes>
    </Router>
  );
}

export default App;
