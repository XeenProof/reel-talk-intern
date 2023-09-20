import React from 'react';

/**
 * The logo design is here
 * @returns Logo 
 */
const NavbarLogo:React.FC = () => {

    return (<div id='navbar-logo' className='logo'>
            <img src='images/RTLogo.png' alt='logo192.png' className="logo-image"/>
            <text className="logo-text">REEL TALK</text>
        </div>)
}

export default NavbarLogo;