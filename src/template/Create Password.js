import React from 'react'
import ReactDOM from 'react-dom/client'

import './screenStyle_2.css'



function Screen2() {
  return(
    <div className="content">
      <h2 className="contentHeading">Enter your email address</h2>
      <form action="" method="POST">
          <label for="">Your Email Address</label>
          <input type="text" name="email" id="email" placeholder="Enter your email address"></input>
          <p>Already a user? <a href="#">Log in</a></p>
      <footer>
          <div className="text">
              <p>By registering, you accept our <a href="#" style="color: black;"><b><u>Terms of Use</u></b></a> and <a href="#" style="color: black;"><b><u>Privacy Policy</u></b></a></p>
          </div>
          <div>
              <input type="submit" className="contButton" value="Continue"></input>
          </div>
      </footer>
    </form>
  </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<Screen2 />);