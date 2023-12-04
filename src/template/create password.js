import React from 'react';
import { useState, useEffect } from "react";
import styles from './screenStyle_3-8.css';




const Screen4 = () => {
  return(
    <div>
        <h2 class="contentHeading">Create a password</h2>
        <p>This will be required for subsequent login on new devices</p>
        <form action="./screen5" method="" id="form">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
            <div class="required">
                <p id="validation" class="reqMent">Minimum of 8 Characters</p>
                <p class="reqMent">Both Upper and lowercase letters</p>
                <p class="reqMent">At least one number and symbol</p>
            </div>
            <footer>
                <input type="submit" class="contButton" value="Continue" />
            </footer>
        </form>
    </div>
  );
}

export default Screen4;
