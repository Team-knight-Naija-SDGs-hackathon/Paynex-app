import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indexpage from './index';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Screen4 from './screen4';
import Screen5 from './screen5';
import Screen6 from './screen6';
import Screen7 from './screen7';
import Screen8 from './screen8';
import Screen9 from './screen9';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indexpage />} />
        <Route path="/screen1" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/screen3" element={<Screen3 />} />
        <Route path="/screen4" element={<Screen4 />} />
        <Route path="/screen5" element={<Screen5 />} />
        <Route path="/screen6" element={<Screen6 />} />
        <Route path="/screen7" element={<Screen7 />} />
        <Route path="/screen8" element={<Screen8 />} />
        <Route path="/screen9" element={<Screen9 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
