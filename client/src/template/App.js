import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indexpage from './index';
import Onboard from './Onboard';
import SignUp from './SignUp';
import Verification from './Verification';
import Login from './LogIn';
import ProfileSetup from './ProfileSetup';
import Screen6 from './screen6';
import BVN from './BVN';
import PlaynextTag from './PlaynextTag';
import CreateaccountLoader from './CreateaccountLoader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indexpage />} />
        <Route path="/Onboard" element={<Onboard />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/ProfileSetup" element={<ProfileSetup />} />
        <Route path="/screen6" element={<Screen6 />} />
        <Route path="/BVN" element={<BVN />} />
        <Route path="/PlaynextTag" element={<PlaynextTag />} />
        <Route path="/CreateaccountLoader" element={<CreateaccountLoader />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
