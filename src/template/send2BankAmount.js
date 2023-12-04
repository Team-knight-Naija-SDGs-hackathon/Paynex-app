import React from 'react';
import styles from './Amount&ConfirmPin.css';
import svg1 from "../assets/world.svg";
import KeyPad from "./keyPad";

const imgStyle = {
    height: '50px',
    width: 'auto',
}
const bStyle = {
    color: '#0F172A',
}
const pStyle = {
    fontSize: '12px',
    color: '#64748B',
}
const amount = {
    color: '#1E293B',
}



const Send2BankAmount = () => {
    return(
        <div className='body3'>
            <div className='mainContent'>
                <img src={svg1} style={imgStyle} />
                <b className='H2'>Enter amount</b>
                <b style={bStyle}>John Doe</b>
                <p style={pStyle}>Keystone bank - 0123456789</p>
            </div>
            <b className='H2' style={amount}><small>₦</small>0.00</b>
            <KeyPad />
        </div>
    );
};

export default Send2BankAmount;