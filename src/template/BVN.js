import React from 'react';


import styles from './screenStyle_3-8.css';



function Screen7() {
  return(
    <div className="{styles.content}">
      <h2 class="contentHeading">Link your BVN</h2>
    <p>By law, your BVN is required to validate your Identity as a PayNext customer</p>
    <form className='form' action="./screen8" method="">
        <label for="password">BVN</label>
        <input className='input' type="text" name="bvn" id="bvn" placeholder="Enter your BVN" pattern="[0-9]{11}" />
        <p class="reqMent">Your BVN is a 11 digit number from your local bank</p>
      <footer>
          <input type="submit" class="contButton" value="Next"/>
      </footer>
    </form>
  </div>
  );
};


export default Screen7;