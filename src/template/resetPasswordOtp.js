import React from 'react';
import styles from './screenStyle_3-8.css';


const ResetPasswordOTP = () => {
  return(
    <div className="{styles.content}">
      <h2 class="contentHeading">Reset Password</h2>
      <p>Please enter the OTP sent to your email johndoe@example.com below to autheniticate</p>
      <form className='form1' action="./screen4" method="">
        <div class="digitFill">
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="-"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="0"/>
          <input className='input' type="text" name="code" id="code" maxlength="1" placeholder="0"/>
        </div>
        <p id="validation">Send code in <b>5:00</b></p>
    </form>
  </div>
  );
};

export default ResetPasswordOTP;