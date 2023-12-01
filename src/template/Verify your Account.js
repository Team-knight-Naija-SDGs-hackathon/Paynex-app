import React from 'react'
import ReactDOM from 'react-dom/client'

import './screenStyle_3-8.css'



function Screen3() {
  return(
    <div className="content">
      <h2 class="contentHeading">Verify your account</h2>
      <p>Enter the 6 digits security code sent to gr*****2@gmail.com</p>
      <form action="" method="POST">
        <div class="digitFill">
          <input type="text" name="email" id="email" maxlength="1" placeholder="-"/>
          <input type="text" name="email" id="email" maxlength="1" placeholder="-"/>
          <input type="text" name="email" id="email" maxlength="1" placeholder="-"/>
          <input type="text" name="email" id="email" maxlength="1" placeholder="-"/>
          <input type="text" name="email" id="email" maxlength="1" placeholder="-"/>
          <input type="text" name="email" id="email" maxlength="1" placeholder="-"/>
        </div>
        <p id="validation">Code expires in <b>5:00</b></p>

        <a class="reSend">Resend Code</a>
        <footer>
            <input type="submit" class="contButton" value="Continue"/>
        </footer>
    </form>
  </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<Screen3 />);