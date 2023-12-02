import React from 'react';

import styles from './screenStyle_3-8.css';



const Login = () => {
  return(
    <div className="{styles.content}">
      <h2 className="contentHeading">Welcome back!</h2>
      <p>Log into your account</p>
      <form className='form' action="" method="POST">
          <label for="">Email</label>
          <input className='input' type="text" name="email" id="email" placeholder="Enter your email address"></input>
          <label for="">Password</label>
          <input className='input' type="text" name="email" id="email" placeholder="Enter your password"></input>
          <p>Don't have an account? <a href='/SignUp'>Sign Up</a></p>
      <footer>
          <div>
              <input type="submit" className="contButton" value="Next"/>
          </div>
      </footer>
    </form>
  </div>
  );
}

export default Login;
