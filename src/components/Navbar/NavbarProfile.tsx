import React from 'react';
import {BsChevronDown} from 'react-icons/bs'

const NavbarProfile:React.FC = () => {

    return (<div className='profile'>
            <img src='images/test.png' alt='logo192.png' className="profile-image circle"/>
            <BsChevronDown className='profile-down'/>
        </div>)
}

export default NavbarProfile;