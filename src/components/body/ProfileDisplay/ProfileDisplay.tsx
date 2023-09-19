import React from "react";
import Progression from "../Progression/Progression";

const ProfileDisplay:React.FC = () => {
    return(
    <div className='center profile-display'>
        <div className="profile-title">
            Customize your profile
        </div>
        <div className="profile-text">
            Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.
        </div>
        <Progression/>
    </div>
    )
}

export default ProfileDisplay;