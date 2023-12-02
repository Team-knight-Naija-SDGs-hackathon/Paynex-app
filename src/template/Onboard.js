import React from 'react';
import svg from "../assets/currency.svg"
import { Link } from 'react-router-dom';
import './screenStyle_1.css';

const Onboard = () => {
  // const style = {
  //   display: 'flex',
  //   textDecoration: 'none',
  //   backgroundColor: 'var(--primary)',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   minWidth: '470px',
  //   height: '40px',
  //   borderRadius: '100px',
  //   margin: '20px 0 0 0 ',

  //   };

  //   const action = {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: "center",
  //     alignItems: 'center',
  //     width: '100%',
  //     height: '150px',
  //   }

  return (
    <div className="content">
        <div><img src={svg} alt="Currency" /></div>

        <div className="slider">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <div className="text">
            <b className="contentText">Banking without borders across</b>
            {/* <b className="contentText">Custom cards, spend with no limits anywhere</b>
            <b className="contentText">Pay bills anywhere without hassle</b> */}
        </div>
        <footer>
        <div className="actionSection">
            <a href= "/SignUp"><p>Create an account</p></a>
            <a href="/LogIn">Login</a>
        </div>
        </footer>
    </div>
  );
};

export default Onboard;