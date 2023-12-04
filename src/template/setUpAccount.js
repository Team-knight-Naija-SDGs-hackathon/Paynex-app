import React from 'react';
import { useState, useEffect } from "react";
import styles from './setUpAccount.css';
import svg1 from "../assets/ArrowDown.svg";
import svg2 from "../assets/nigeriaFlag.svg";
import svg3 from "../assets/usFlag.svg";
import svg4 from "../assets/ukFlag.svg";
import svg5 from "../assets/kenyaFlag.svg";
import svg6 from "../assets/ghanaFlag.svg";



const h2Style = {
  alignSelf: 'flex-start', 
  marginLeft: '15%', 
  marginBottom: '10px',
};
const Flags = {
  width: '25px', 
  height: 'auto',
};


function SetUpAccount() {

  // useEffect(() => {

  //   let PickCountry = () => {

  //     document.getElementById("PopUp").style.display = "flex";
  //     document.getElementById("Main").style.display = "none";

  //   };

  //   document.getElementById("CountryDD").addEventListener("click", PickCountry);

  // }, []);

  return(
    <div>
      <div id="Main">
        <h2 className="contentHeading">Set up your profile</h2>
        <p>Home address is important to validate your KYC</p>
        <form action="./screen7" method="">
            <label for="CountryDD">Country</label> 

            <select id="banks" className='select' name="banks" required>
              <option value="default" disabled selected>Select Country</option>
              <option value="gtbank">Nigeria</option>
              <option value="union">United State</option>
              <option value="uba">United Kingdom</option>
              <option value="first">Kenya</option>
              <option value="first">Ghana</option>
            </select>
            {/* <div className='CountryDropDown' id="CountryDD">
                <p>Select Country</p>
                <img src={svg1} className='ArrowDown' />
            </div> */}
            <footer>
                <input type="submit" className="contButton" value="Next" />
            </footer>
        </form>
    </div>
    {/* <div class="container" id="PopUp">
        <h2 style={h2Style}>Select Country</h2>
        <div class="countries">
            <input type="radio" name="country" id="select1" class="select" />
            <label class="country country1" for="select1">
                <div class="selectContent">
                    <img src={svg2} alt="Nigeria Flag" style={Flags} />
                    <b>Nigeria</b>
                </div>
            </label>
        </div>
        <div class="countries">
            <input type="radio" name="country" id="select2" class="select" />
            <label class="country country2" for="select2">
                <div class="selectContent">
                    <img src={svg3} alt="United State Flag" style={Flags} />
                    <b>United State</b>
                </div>
            </label>
        </div>
        <div class="countries">
            <input type="radio" name="country" id="select3" class="select" />
            <label class="country country3" for="select3">
                <div class="selectContent">
                    <img src={svg4} alt="Nigeria Flag" style={Flags} />
                    <b>United Kingdom</b>
                </div>
            </label>
        </div>
        <div class="countries">
            <input type="radio" name="country" id="select4" class="select" />
            <label class="country country4" for="select4">
                <div class="selectContent">
                    <img src={svg5} alt="Nigeria Flag" style={Flags} />
                    <b>Kenya</b>
                </div>
            </label>
        </div>
        <div class="countries">
            <input type="radio" name="country" id="select5" class="select" />
            <label class="country country5" for="select5">
                <div class="selectContent">
                    <img src={svg6} alt="Nigeria Flag" style={Flags} />
                    <b>Ghana</b>
                </div>
            </label>
        </div>
    </div> */}
    </div>
  );
};


export default SetUpAccount;