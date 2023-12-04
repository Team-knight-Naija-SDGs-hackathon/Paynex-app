import React from 'react';
import { useState, useEffect } from "react";
import styles from './screenStyle_3-8.css';



function Screen6() {

  return(
    <div>
        <h2 class="contentHeading">Set up your profile</h2>
        <p>The information provided here needs to be accurate</p>
        <form action="./setUpAccount" method="">
            <label for="firstName">Phone Numbern</label> 
            <input type="tel" className='input' name="phone" id="phone" placeholder="08012035578" pattern="[0]{1}[0-9]{3}[0-9]{3}[0-9]{4}" required/>
            <label for="birthDate">Date of Birth</label>
            <input className='input' type="date" name="birthDate" id="birthDate" placeholder="DD/MM/YY" required/>
            {/* <!-- Not done with this part yet --> */}
            <label for="lastName">Nationality</label>
            <select id="banks" className='select' name="banks" required>
              <option value="default" disabled selected>Select Country</option>
              <option value="gtbank">Nigeria</option>
              <option value="union">United State</option>
              <option value="uba">United Kingdom</option>
              <option value="first">Kenya</option>
              <option value="first">Ghana</option>
            </select>
            <footer>
                <input type="submit" class="contButton" value="Continue" />
            </footer>
        </form>
    </div>
  );
};


export default Screen6;