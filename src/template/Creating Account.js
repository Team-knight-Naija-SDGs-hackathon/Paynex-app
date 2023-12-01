import React from 'react'
import ReactDOM from 'react-dom/client'

import './screenStyle_3-8.css'



function Screen9() {
  return(
    <div className="content">
      <img src="../assets/world.svg" alt="PayNext" />
    <h2 style="width: 80%; text-align: center;">Creating your account</h2>
    <div class="progress">
        <input type="range" name="" id="" min="0" max="100" value="3%"/>
        <span class="percentage">3%</span>
    </div>
  </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<Screen9 />);