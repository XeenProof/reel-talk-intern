import React, { useContext } from "react";
import Progression from "../Progression/Progression";
import ProfileIcon from "./ProfileIcon";
import ProfileInfo from "./ProfileInfo";
import ProfileDescription from "./ProfileDescription";
import { UserFormContext } from "../../../context/UserForm";
import { RTButtonDesigns } from "../../common/RTButton";

const ProfileDisplay:React.FC = () => {
    const {state} = useContext(UserFormContext)

    const isCompleted:boolean = !(state.description === '' || state.display_name === '' || state.location === '')

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
        <ProfileDescription/>
        <Progression nextText={isCompleted?"Next":"Skip"} nextStyle={(isCompleted)?RTButtonDesigns.PRIMARY:RTButtonDesigns.SOCIAL}/>
    </div>
    )
}

export default ProfileDisplay;