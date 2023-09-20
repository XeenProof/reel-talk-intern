import React from 'react';
import { BsPlus } from 'react-icons/bs';

/**
 * Creates the profile icon and the add button to the left of the page
 * @returns The profile icon
 */
const ProfileIcon:React.FC = () => {

    return (
        <div id='profile-page-icon' className='profile'>
            <img src='images/test.png' alt='logo192.png' className="profile-image-large circle"/>
            <BsPlus className='profile-add-image circle'/>
        </div>)
}

export default ProfileIcon;