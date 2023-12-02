import React from 'react';


import styles from './screenStyle_3-8.css';



function Screen8() {
  return(
    <div className="{styles.content}">
      <h2 class="contentHeading">Create a PayNext Tag</h2>
    <p>With PayNex tag you can send and receive money with just links</p>
    <form className='form' action="" method="POST">
        <label for="password">PayNext tag</label>
        <input className='input' type="number" name="bvn" id="bvn" placeholder="@Enter a suitable name i.e charlieboy"/>
        <p class="reqMent">paynext.app/charlieboy</p>
    <footer>
        <input type="submit" class="contButton" value="Next"/>
    </footer>
</form>
  </div>
  );
}


export default Screen8;