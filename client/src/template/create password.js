import React from 'react';

import styles from './screenStyle_3-8.css';



const Screen4 = () => {
  return(
    <div className="{styles.content}">
      <h2 className="contentHeading">Enter your email address</h2>
      <form className='form' action="" method="POST">
          <label for="">Your Email Address</label>
          <input className='input' type="text" name="email" id="email" placeholder="Enter your email address"></input>
          <p>Already a user? <a href="#">Log in</a></p>
      <footer>
          <div className="text">
              <p>By registering, you accept our <a href="#" ><b><u>Terms of Use</u></b></a> and <a href="#" ><b><u>Privacy Policy</u></b></a></p>
          </div>
          <div>
              <input type="submit" className="contButton" value="Continue"/>
          </div>
      </footer>
    </form>
  </div>
  );
}

export default Screen4;
