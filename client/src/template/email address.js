import React from 'react';
import ReactDOM from 'react-dom';

import styles from './screenStyle_2.css';



const Screen2 =() => {
  return (
    <div className="body">
      <div className="content-acc">
        <h2 className="contentHeading">Enter your email address</h2>
        <form className="form" action="" method="POST">
            <label for="">Your Email Address</label>
            <input type="text" name="email" id="email" placeholder="Enter your email address"/>
            <p>Already a user? <a href="#">Log in</a></p>
        <footer>
            <div className="text">
                <p>By registering, you accept our <a href="#" ><b><u>Privacy Policy</u></b></a></p>
            </div>
            <div>
                <input type="submit" className="contButton" value="Continue"/>
            </div>
        </footer>
      </form>
    </div>
    </div>
    );
};


export default Screen2;