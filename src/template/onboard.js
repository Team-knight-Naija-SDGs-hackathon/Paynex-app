import React from 'react'
import ReactDOM from 'react-dom/client'

import './screenStyle_2.css'

function Screen1() {
  return(
    <div className="content">
    <img src="../assets/creditCard.svg" alt="Currency"/>
    <div className="slider">
        <div style="flex-grow: 3" className="shape"></div>
        <div style="flex-grow: 2" className="shape"></div>
        <div style="flex-grow: 1" className="shape"></div>
    </div>
    <div className="text">
        <b className="contentText">Banking without borders across</b>
        <b className="contentText">Custom cards, spend with no limits anywhere</b>
        <b className="contentText">Pay bills anywhere without hassle</b>
    </div>
    <div className="actionSection">
        <a href="screen_2.html">Create an account</a>
        <a href="#">Login</a>
    </div>
</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<Screen1 />);