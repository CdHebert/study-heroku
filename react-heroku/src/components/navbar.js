import React, { Component }  from 'react';
import Portfolio from "../pages/portfolio"

// Create function
// props are parameters   1 to infinite....... all parameters are accessed props.(variable)   i.e. promps.set_screen
const Navbar = (props) => {
    const change_screen = (event) => {
        // console.dir(event.target)
        props.set_screen(event.target.textContent)
    }
    return (
        <div>
            <ul className="menuoptions">
                <li><a href='#' onClick={change_screen}>About</a></li>
                <li><a href='#' onClick={change_screen}>Portfolio</a></li>
                <li><a href='#' onClick={change_screen}>Contact</a></li>
                {/* <li><a href={process.env.PUBLIC_URL='BennyGabel.pdf'}></a></li> */}
                <li><a href='/BennyGabel.pdf'>Resume</a></li>
            </ul>

        </div>
    )
}

// Export Function 
// module.exports = Navbar
export default Navbar