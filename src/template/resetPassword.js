import React from 'react';
import styles from './resetPassword.css';
import { useState, useEffect } from "react";



const h2Style = {
    fontSize: '25px',
}




const ResetPassword = () => {

    useEffect(() => {

        let sent = () => {
            let x = document.forms["getEmail"]["email"].value;
            if (x !== "") {
                document.getElementById("SentPopUp").style.display = "flex";
                document.getElementById("MainPage").style.display = "none";
            } else {
                return false
            }
            
        };
        let validateForm = () => {
            let x = document.forms["getEmail"]["email"].value;
            if (x == "") {
                document.getElementById("validation").innerHTML = "Please Enter your password";
                return false;
            }
        };
        document.getElementById("clicker").addEventListener("click", sent);
    }, []);

    return(
        <div>
            <div id="MainPage">
                <h2 class="contentHeading">Reset Password</h2>
                <p>Provide your registered email address ro recieved authorization</p>
                <form action="./screen2" method="" name="getEmail" onsubmit="return validateForm()">
                <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email address" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required/>
                    <p>Don’t have an account? <a href="./screen2"> Sign Up</a></p>
                    <p id='validation'></p>
                    <footer>
                        <input type="submit" class="contButton" id="clicker" value="Next" />
                    </footer>
                </form>
            </div>
            <div className="SentPopUp" id="SentPopUp">
                <b style={h2Style}>Sent</b>
                <p>Your password reset OTP has been sent johndoe@example.com</p>
            </div>
        </div>
    );
};

export default ResetPassword;
