import React from 'react';
import styles from './dashboard.css';
import svg1 from '../assets/profileImage.svg';
import svg2 from '../assets/smallNigeriaFlag.svg';
import svg3 from '../assets/hide.svg';
import svg4 from '../assets/addMoney.svg';
import svg5 from '../assets/sendMoney.svg';
import svg6 from '../assets/payBill.svg';
import svg7 from '../assets/more.svg';
import svg8 from '../assets/refer.svg';
import svg9 from '../assets/johnProfile.svg';
import svg10 from '../assets/dstvProfile.svg';
import svg11 from '../assets/mumProfile.svg';
import svg12 from '../assets/netflixProfile.svg';
import svg13 from '../assets/maiaProfile.svg';
import svg14 from '../assets/laurelProfile.svg';
import svg15 from '../assets/debitIcon.svg';
import svg16 from '../assets/creditIcon.svg';
import svg17 from '../assets/home.svg';
import svg18 from '../assets/send.svg';
import svg19 from '../assets/card.svg';
import svg20 from '../assets/settings.svg';


const imgStyle = {
    height: '20px', 
    width: 'auto',
}
const img1 = {
    height: '30px', 
    width: 'auto',
}
const img2 = {
    height: '10px', 
    width: 'auto',
}
const ngn = {
    fontSize: '10px',
}
const font1 = {
    fontSize: '12px',
}
const font2 = {
    fontSize: '25px',
}
const div1 = {
    gap: '9px',
}
const div2 = {
    height: 'max-content',
}
const AlignCenter = {
    alignItems: 'center',
}
const gap1 = {
    gap: '7px',
}
const gap2 = {
    gap: '25px',
}
const currency = {
    gap: '7px', 
    backgroundColor: 'white', 
    padding: '5px 10px 5px 10px', 
    borderRadius: '21px',
}
const QuickAccessStyle = {
    height: '50px', 
    width: 'auto',
}
const imgFull = {
    width: '100%',
    height: 'auto',
}
const QuickAccessFont = {
    fontSize: '8px', 
    marginTop: '-10px',
}
const MenuActive = {
    fontSize: '8px', 
    color: '#34A8FA',
}
const MenuInactive = {
    fontSize: '8px', 
    color: '64748B',
}




const Dashboard = () => {
    return(
        <div className='body'>
            <div class="infoSection">
        <div class="row spaceBetween">
            <div class="row" style={gap1}>
                <img src={svg1} alt="Profile Picture" style={img1} />
                <p>Hi, Jimmy</p>
            </div>
            <div class="row" style={currency}>
                <img src={svg2} alt="Naira" style={img2} />
                <p style={ngn}>NGN</p>
            </div>
        </div>
        <div class="column" style={div1}>
            <p style={font1}>Account Balance</p>
            <div class="row spaceBetween">
                <h2 style={font2}>₦6,000,000.<small>00</small></h2>
                <img src={svg3} alt="Hide" style={imgStyle} />
            </div>
        </div>
    </div>
    <div class="section">
        <div class="row spaceAround" style={div2}>
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg4} alt="Add Money" style={QuickAccessStyle} />
                    <p style={QuickAccessFont}>Add Money</p>
                </div>
            </a>
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg5} alt="Send Money" style={QuickAccessStyle} />
                    <p style={QuickAccessFont}>Send Money</p>
                </div>
            </a>
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg6} alt="Pay Bills" style={QuickAccessStyle} />
                    <p style={QuickAccessFont}>Pay Bills</p>
                </div>
            </a>
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg7} alt="More" style={QuickAccessStyle} />
                    <p style={QuickAccessFont}>More</p>
                </div>
            </a>
        </div>
        <a href="">
            <img src={svg8} alt="Refer" style={imgFull} />
        </a>
        <div class="favorite">
            <b>Favorites</b>
            <div class="favList">
                <div class="story">
                    <img src={svg9} alt="John" />
                    <p>John</p>
                </div>
                <div class="story">
                    <img src={svg10} alt="DSTV" />
                        <p>DSTV</p>
                </div>
                <div class="story">
                    <img src={svg11} alt="Mummy" />
                    <p>Mummy</p>
                </div>
                <div class="story">
                    <img src={svg12} alt="Netflix" />
                    <p>Netflix</p>
                </div>
                <div class="story">
                    <img src={svg13} alt="Maia Walsh" />
                    <p>Maia Walsh</p>
                </div>
                <div class="story">
                    <img src={svg14} alt="Laurel Lane" />
                    <p>Laurel Lane</p>
                </div>
            </div>
        </div>
        <div class="transactions">
            <b>Transactions</b>
            <div class="row spaceBetween">
                <div class="row" style={gap2}>
                    <img src={svg15} alt="Debit" style={imgStyle} />
                    <div class="column">
                        <b style={font1}>Quincy Jones</b>
                        <p>22 NOV 2023, 8:15</p>
                    </div>
                </div>
                <b style={font1}>₦ 500,000</b>
            </div>
            <div class="row spaceBetween">
                <div class="row" style={gap2}>
                    <img src={svg16} alt="Credit" style={imgStyle} />
                    <div class="column">
                        <b style={font1}>Quincy Jones</b>
                        <p>22 NOV 2023, 8:15</p>
                    </div>
                </div>
                <b style={font1}>₦ 500,000</b>
            </div>
            <div class="row spaceBetween">
                <div class="row" style={gap2}>
                    <img src={svg16} alt="Credit" style={imgStyle} />
                    <div class="column">
                        <b style={font1}>Quincy Jones</b>
                        <p>22 NOV 2023, 8:15</p>
                    </div>
                </div>
                <b style={font1}>₦ 500,000</b>
            </div>
        </div>
        <div class="menuTab">
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg17} alt="Home" style={imgStyle} />
                    <p style={MenuActive}>Home</p>
                </div>
            </a>
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg18} alt="Send" style={imgStyle} />
                    <p style={MenuInactive}>Send</p>
                </div>
            </a>
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg19} alt="Card" style={imgStyle} />
                    <p style={MenuInactive}>Card</p>
                </div>
            </a>
            <a href="">
                <div class="column click" style={AlignCenter}>
                    <img src={svg20} alt="Settings" style={imgStyle} />
                    <p style={MenuInactive}>Settings</p>
                </div>
            </a>
        </div>
    </div>
        </div>
    );
};

export default Dashboard;