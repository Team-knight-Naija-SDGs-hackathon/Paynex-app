import React from 'react';
import svg from "../assets/world.svg"

import styles from './screenStyle_9.css';



function Screen9() {
  return(
    <div className="contents">
      <img src={svg} alt="PayNext" />
    <h2 >Creating your account</h2>
    <div class="progress">
        <input className='range' type="range" name="" id="" min="0" max="100" value="3%"/>
        <span class="percentage">3%</span>
    </div>
  </div>
  );
}


export default Screen9;