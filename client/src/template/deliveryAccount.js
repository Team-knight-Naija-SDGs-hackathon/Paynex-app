import React from 'react';
import styles from './deliveryAccount.css';
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
const img1Style = {
    width: 'auto',
    height: '17px',
}
const picsStyle = {
    width: 'auto',
    height: '35px',
}
const gap = {
    gap: '15px',
}

const DeliveryAccount = () => {
  return(
    <div className="{styles.content}" style={contentStyle}>
      <div className='row spaceBetween'>
        <h2>Choose Delivery Account</h2>
        <img src={svg3} style={img1Style} />
      </div>
      <div className='row'>
        <input className='search' type="search" placeholder="Search Beneficiaries" />
        <img src={svg1} style={imgStyle} />
      </div>
      <div className='row' style={gap}>
        <img src={svg2} style={picsStyle} />
        <div className='column'>
            <b>Jojo Quicks</b>
            <small>Barclays Bank - 078123567</small>
        </div>
      </div>
  </div>
  );
};

export default DeliveryAccount;