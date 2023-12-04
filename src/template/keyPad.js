import React from 'react';
import styles from './keyPad.css';
import svg2 from "../assets/delete.svg";


const imgStyle2 = {
    height: '15px',
    width: 'auto',
}


const KeyPad = () => {
    return (
        <div className='KeyPad'>
            <div class="gridItem">1</div>
            <div class="gridItem">2</div>
            <div class="gridItem">3</div>
            <div class="gridItem">4</div>
            <div class="gridItem">5</div>
            <div class="gridItem">6</div>
            <div class="gridItem">7</div>
            <div class="gridItem">8</div>
            <div class="gridItem">9</div>
            <div class="gridItem"><img src={svg2} style={imgStyle2} /></div>
            <div class="gridItem">0</div>
            <div class="gridItem">OK</div>
        </div>
    );
};

export default KeyPad;