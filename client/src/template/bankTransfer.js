import React from 'react';
import styles from './bankTransfer.css';
import svg from '../assets/copy.svg';

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
}
const pfontStyle = {
    fontSize: '14px',
}
const imgStyle = {
    width: 'auto',
    height: '14px',
}

const BankTransfer = () => {
  return(
    <div className="{styles.content}" style={contentStyle}>
      <h3>Account details</h3>
      <p style={pfontStyle}>Use the details below to receive money into your TransBorder wallet</p>
      <div className='detailContainer'>
        <div className='column'>
            <b>Bank</b>
            <small>Providus</small>
        </div>
        <div className='row spaceBetween'>
            <div className='column'>
                <b>Account Number</b>
                <small>1234567890</small>
            </div>
            <a href="#">
                <img src={svg} alt="Copy" style={imgStyle} />
            </a>
        </div>
        <div className='column'>
            <b>Account Name</b>
            <small>John Doe</small>
        </div>
      </div>
  </div>
  );
};

export default BankTransfer;