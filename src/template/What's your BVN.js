import React from 'react'
import ReactDOM from 'react-dom/client'

import './screenStyle_3-8.css'



function Screen7() {
  return(
    <div className="content">
      <h2 class="contentHeading">Link your BVN</h2>
    <p>By law, your BVN is required to validate your Identity as a PayNext customer</p>
    <form action="" method="POST">
        <label for="password">BVN</label>
        <input type="number" name="bvn" id="bvn" placeholder="Enter your BVN"/>
        <p class="reqMent">Your BVN is a 11 digit number from your local bank</p>
      <footer>
          <input type="submit" class="contButton" value="Next"/>
      </footer>
    </form>
  </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<Screen7 />);