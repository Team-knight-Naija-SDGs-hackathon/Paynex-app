import React from 'react';
import styles from './screenStyle_3-8.css';


const Screen3 = () => {
  return(
    <div className="{styles.content}">
      <h2 class="contentHeading">Verify your account</h2>
      <p>Enter the 6 digits security code sent to gr*****2@gmail.com</p>
      <form className='form1' action="./screen4" method="">
        <div class="digitFill">
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-" pattern="[0-9]{1}" required/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-" pattern="[0-9]{1}" required/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-" pattern="[0-9]{1}" required/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-" pattern="[0-9]{1}" required/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-" pattern="[0-9]{1}" required/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-" pattern="[0-9]{1}" required/>
        </div>
        <p id="validation">Code expires in <b>5:00</b></p>

        <a class="reSend">Resend Code</a>
        <footer>
            <input type="submit" class="contButton" value="Continue"/>
        </footer>
    </form>
  </div>
  );
};

export default Screen3;