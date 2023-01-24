import React  from 'react';    // , { Component }

import '../index.css';
import profile from '../img/bennygabel.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { CarouselItem } from 'react-bootstrap';


// Create function
const About = () => {
    return (
        <div>
            <div>
                <img src={profile} alt="Benny Gabel" style={{ width: '300px', height: '300px'}}/> 
            </div>
            <div id="subtitle">
                About Me
            </div>

            <div id="content">
            <text>
                Hi !!  <br />
                This is <strong style={{ color:"#009900"}}> Benny Gabel </strong> <br />
                <br />
                My passion for computers started in my childhood.<br />
                Working with databases from early 90s.<br />
                Was part of the group who created the <br />
                credit card department in Banco Wiese,<br />
                Lima Peru.
            </text>

            </div>
<br />
            <div id="subtitle">
                About my experience
            </div>
            <div id="content">
            I work as a software consultant/developer <br />
            since 1999, on accounting systems covering the areas of <br />
            on Accounts Payable, Accounts Receivables, Inventory Control, General Ledger, Purchase Orders. <br />
            Had also developed reporting systems, automated processes, FTP and many others
            {/* <text style={{ color:"red" }}>to be continue..</text> */}
            </div>
        </div>


    )
}

// Export Function 
// module.exports = About
export default About