import React from 'react';
import ReactDOM from 'react-dom'
import svg1 from "../assets/currency.svg"
import svg2 from "../assets/creditCard.svg"
import svg3 from "../assets/CurrencyTwo.svg"
import styles from './screenStyle_1.css';
import { useState, useEffect } from "react";


const imgStyle = {
  width: '100%', 
  height: 'auto',
}

const shapeGrow1 = {
  flexGrow: 3,
}
const shapeGrow2 = {
  flexGrow: 2,
}
const shapeGrow3 = {
  flexGrow: 1,
}



const Screen1 = () => {

  useEffect(() => {
    setTimeout(myTimeout1, 3000);
  setTimeout(myTimeout2, 6000);
  
  function myTimeout1() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("shape1").style.backgroundColor = "#CBD5E1";
    document.getElementById("shape2").style.backgroundColor = "#34A8FA";
    document.getElementById("svg1").style.display = "none";
    document.getElementById("svg2").style.display = "block";
  }
  function myTimeout2() {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
    document.getElementById("shape2").style.backgroundColor = "#CBD5E1";
    document.getElementById("shape3").style.backgroundColor = "#34A8FA";
    document.getElementById("svg2").style.display = "none";
    document.getElementById("svg3").style.display = "block";
  }
  }, []);
  return (
    <div class="content">
        <div className='height'>
          <img src={svg1} className='image' id="svg1" alt="Currency" style={imgStyle} />
          <img src={svg2} className='image' id="svg2" alt="Currency" style={imgStyle} />
          <img src={svg3} className='image' id="svg3" alt="Currency" style={imgStyle} />
        </div>
        <div class="slider">
            <div style={shapeGrow1} class="shape" id="shape1"></div>
            <div style={shapeGrow2} class="shape" id="shape2"></div>
            <div style={shapeGrow3} class="shape" id="shape3"></div>
        </div>
        <div class="text">
            <b class="contentText" id="div1">Banking without borders across</b>
            <b class="contentText" id="div2">Custom cards, spend with no limits anywhere</b>
            <b class="contentText" id="div3">Pay bills anywhere without hassle</b>
        </div>
        <div class="actionSection">
            <a href="./screen2">Create an account</a>
            <a href="#">Login</a>
        </div>
    </div>
  );
};

export default Screen1;