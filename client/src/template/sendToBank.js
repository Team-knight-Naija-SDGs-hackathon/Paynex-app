import React from 'react';
import styles from './sendToBank.css';
import svg1 from '../assets/search.svg';
import svg2 from '../assets/jk.svg';
import svg3 from '../assets/add.svg';

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
}
const imgStyle = {
    position: 'absolute',
    left: '30px',
    width: 'auto',
    height: '17px',
}
const right = {
  alignSelf: 'flex-end',
  fontSize: '12px',
}
const fontSize = {
  fontSize: '12px'
}

const SendToBank = () => {
  return(
    <div className="{styles.content}">
      <h2 class="contentHeading">Send to bank</h2>
      <form className='form' action="" method="POST">
      <label for="accNumber">Bank</label>
      <select id="banks" className='select' name="banks">
        <option value="default" disabled selected>Select Bank</option>
          <option value="gtbank">Guaranty Trusted Bank</option>
          <option value="union">Union Bank</option>
          <option value="uba">UBA</option>
          <option value="first">First Bank</option>
        </select>
        <label for="accNumber">Account Number</label>
        <input className='input' type="number" name="accNumber" id="accNumber" placeholder="Enter your first Name"/>
        <b style={right}>Jaky Urla</b>
        <label for="description">Description</label>
        <input className='input' type="text" name="description" id="description" placeholder="Add a short note"/>
        <div className='row gap save'>
          <input type="checkbox" />
          <b style={fontSize}>Save to benefiaries</b>
        </div>
        <footer>
            <input type="submit" class="contButton" value="Send Money"/>
        </footer>
      </form>
    </div>
  );
};

export default SendToBank;