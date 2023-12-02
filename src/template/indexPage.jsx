import React from 'react';
import svg from "../assets/paynext.svg";
// import './indexPage.css';

const newStyle = {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#34A8FA9E",
    margin: "-40px 0px -20px -20px",
}


let Index = () => {
  return (
    <div style={newStyle} >
      <img src={svg} alt="PayNext" />
      
      <div className="actionSection">
            <a href="/Onboard">Lets Go!</a>
        </div>
    </div>
  );
}

export default Index;