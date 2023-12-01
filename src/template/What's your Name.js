import React from 'react'
import ReactDOM from 'react-dom/client'

import './screenStyle_3-8.css'



function Screen5() {
  return(
    <div className="content">
      <h2 class="contentHeading">Set up your profile</h2>
    <p>Your name as it is in your official document</p>
    <form action="" method="POST">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" placeholder="Enter your first Name"/>
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" placeholder="Enter your last Name"/>
        <footer>
            <input type="submit" class="contButton" value="Continue"/>
        </footer>
    </form>
  </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById ('root'));
root.render(<Screen5 />);