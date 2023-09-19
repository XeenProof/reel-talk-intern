import React from 'react';
import { BsPlus } from 'react-icons/bs';

const ProfileIcon:React.FC = () => {

    return (
        <div className='profile'>
            <img src='images/test.png' alt='logo192.png' className="profile-image-large circle"/>
            <BsPlus className='profile-add-image circle'/>
        </div>)
}

export default ProfileIcon;