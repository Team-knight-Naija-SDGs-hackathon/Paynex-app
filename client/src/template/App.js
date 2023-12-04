import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Indexpage from './index';
import Screen1 from './Onboard';
import Screen2 from './email address';
import Screen3 from './verify acc';
import Screen4 from './create password';
import Screen5 from './whats your name';
import Screen6 from './home address';
import Screen7 from './BVN';
import Screen8 from './Triggo tag';
import Screen9 from './Create acc';
import Dashboard from './dashboard';
import AddMoney from './addMoney';
import BankTransfer from './bankTransfer';
import DeliveryAccount from './deliveryAccount';
import SendToBank from './sendToBank';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { useState } from 'react';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <>
    <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} /><BrowserRouter>
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addMoney" element={<AddMoney />} />
        <Route path="/bankTransfer" element={<BankTransfer />} />
        <Route path="/deliveryAccount" element={<DeliveryAccount />} />
        <Route path="/sendToBank" element={<SendToBank />} />

      </Routes>
    </BrowserRouter></>
  );
}

export default App;
