import React from 'react';
import {BsChevronDown} from 'react-icons/bs'

/**
 * This is what makes the profile icons
 * If it weren't only a placeholder right now, the clickable feature would be here as well
 * @returns The profile icon and carrot
 */
const NavbarProfile:React.FC = () => {
    return (<div id='profile' className='profile'>
            <img src='images/test.png' alt='logo192.png' className="profile-image circle"/>
            <BsChevronDown className='profile-down'/>
        </div>)
}

export default NavbarProfile;