import React, { useContext } from "react";
import Progression from "../Progression/Progression";
import ProfileIcon from "./ProfileIcon";
import ProfileInfo from "./ProfileInfo";
import ProfileDescription from "./ProfileDescription";
import { UserFormContext } from "../../../context/UserFormContext";
import { RTButtonDesigns } from "../../common/RTButton";

/**
 * The main display for the profile page
 * @returns The profile page's unique contexts
 */
const ProfileDisplay:React.FC = () => {
    const {state} = useContext(UserFormContext)

    const isCompleted:boolean = !(state.description === '' || state.display_name === '' || state.location === '')

    return(
    <div id='profile-display-main' className='center profile-display vertical-display'>
        <div id="profile-display-title" className="profile-title">
            Customize your profile
        </div>
        <div id="profile-display-text" className="profile-text">
            Personalizing your profile will enable us to suggest like-minded users and nearby communities for exciting watch parties and movie premiere gatherings.
        </div>
        <div id='profile-box-main' className="profile-box-main center">
            <div id='profile-box-top' className="profile-box-top horizontal-display">
                <ProfileIcon/>
                <ProfileInfo/>
            </div>
        </div>
        <ProfileDescription/>
        <Progression nextText={isCompleted?"Next":"Skip"} nextStyle={(isCompleted)?RTButtonDesigns.PRIMARY:RTButtonDesigns.SOCIAL} id="profile-display-progression"/>
    </div>
    )
}

export default ProfileDisplay;