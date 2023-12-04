import React from 'react';
import styles from './Amount&ConfirmPin.css';
import svg1 from "../assets/shield.svg";
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
    width: '90%',
    textAlign: 'center',
}



const CreatePin = () => {
    return(
        <div className='body3'>
            <div className='mainContent'>
                <img src={svg1} style={imgStyle} />
                <b className='H2'>Confirm PIN</b>
                <p style={pStyle}>Enter your PIN to authorize this transaction</p>
            </div>
            <form action="./createConfirmPin">
            <div className='Pin'>
                <input type="text" maxLength="1" className='PinBox' placeholder="----" required/>
                <input type="text" maxLength="1" className='PinBox' placeholder="----" required/>
                <input type="text" maxLength="1" className='PinBox' placeholder="----" required/>
                <input type="text" maxLength="1" className='PinBox' placeholder="----" required/>
            </div>
            </form>
            <KeyPad />
        </div>
    );
};

export default CreatePin;