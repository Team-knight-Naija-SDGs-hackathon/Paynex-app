import React from 'react';
import styles from './addMoney.css';
import svg1 from '../assets/bankTransfer.svg';
import svg2 from '../assets/cardMoney.svg';

const contentStyle = {
  display: 'flex',
  height: '45vh',
  width: '100%',
  position: 'absolute',
  bottom: '0',
  flexDirection: 'column',
  gap: '15px',
  padding: '40px 20px 20px 20px',
  borderTopRightRadius: '20px',
  borderTopLeftRadius: '20px',
  borderTop: '3px solid #E2E8F0',
  margin: '-20px -20px 0px -20px'
}
const gap = {
  gap: '14px',
  marginTop: '10px'
}
const imgStyle = {
  width: 'auto',
  height: '22px',
}


const AddMoney = () => {
  return(
    <div className="{styles.content}" style={contentStyle}>
      <h3>Add Money</h3>
      <div className='column' style={gap}>
        <a href="./bankTransfer">
        <div className='boxClick'>
          <img src={svg1} style={imgStyle} />
          <div className='column'>
            <b>Bank Transfer</b>
            <small>Receive money with you account number</small>
          </div>
        </div>
        </a>
        <a href="">
        <div className='boxClick'>
          <img src={svg2} style={imgStyle} />
          <div className='column'>
            <b>Card</b>
            <small>Fund wallet using a debit card</small>
          </div>
        </div>
        </a>
      </div>
  </div>
  );
};

export default AddMoney;