import React from 'react';
import svg from "../assets/paynext.svg";
// import './indexPage.css';

const newStyle = {
    display: "flex",
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
      <img src= {svg} alt="PayNext"/>
      <script type="text/javascript">
        (function(){
          setTimeout(function(){
            window.location="./screen1";
          },3000)
        })();
      </script>
    </div>
  );
}

export default Index;