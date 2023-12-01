import React from 'react'
import ReactDOM from 'react-dom/client'

import './screenStyle_3-8.css'



function Screen8() {
  return(
    <div className="content">
      <h2 class="contentHeading">Create a PayNext Tag</h2>
    <p>With PayNex tag you can send and receive money with just links</p>
    <form action="" method="POST">
        <label for="password">PayNext tag</label>
        <input type="number" name="bvn" id="bvn" placeholder="@Enter a suitable name i.e charlieboy"/>
        <p class="reqMent">paynext.app/charlieboy</p>
    <footer>
        <input type="submit" class="contButton" value="Next"/>
    </footer>
</form>
  </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<Screen8 />);