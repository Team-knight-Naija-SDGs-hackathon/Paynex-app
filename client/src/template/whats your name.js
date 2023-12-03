import React from 'react';

import styles from './screenStyle_3-8.css';





const Screen5 = () => {
  return(
    <div className="{styles.content}">
      <h2 class="contentHeading">Set up your profile</h2>
      <p>Your name as it is in your official document</p>
      <form className='form' action="" method="POST">
        <label for="firstName">First Name</label>
        <input className='input' type="text" name="firstName" id="firstName" placeholder="Enter your first Name"/>
        <label for="lastName">Last Name</label>
        <input className='input' type="text" name="lastName" id="lastName" placeholder="Enter your last Name"/>
        <footer>
            <input type="submit" class="contButton" value="Continue"/>
        </footer>
      </form>
    </div>
  );
}

export default Screen5;