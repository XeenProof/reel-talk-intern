import React from "react";
import Progression from "../Progression/Progression";
import ProfileIcon from "./ProfileIcon";
import ProfileInfo from "./ProfileInfo";

const ProfileDisplay:React.FC = () => {
    return(
    <div className='center profile-display vertical-display'>
        <div className="profile-title">
            Customize your profile
        </div>
        <div className="profile-text">
            Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.
        </div>
        <div className="profile-box-main center">
            <div className="profile-box-top horizontal-display">
                <ProfileIcon/>
                <ProfileInfo/>
            </div>
        </div>
        <Progression/>
    </div>
    )
}

export default ProfileDisplay;