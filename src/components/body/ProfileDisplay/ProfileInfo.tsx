import React, { CSSProperties, useContext } from "react";
import RTTextInput from "../../common/RTTextInput";
import { UserFormContext } from "../../../context/UserFormContext";

const ProfileInfo:React.FC = () => {
    const sharedStyle:CSSProperties = {
        maxWidth: '259px',
        width: '259px',
        margin: '0px'
    }

    const nameStyle:CSSProperties = {
        ...sharedStyle,
        fontSize:'36px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        letterSpacing: '-0.54px'
    }

    const locationStyle:CSSProperties = {
        ...sharedStyle,
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        letterSpacing: '0.1px',
        paddingLeft: '16px',
    }

    const {state, updateField} = useContext(UserFormContext);


    return (<div className="profile-info">
        <RTTextInput id='display-name' style={nameStyle} display={state.display_name}
            defaultDisplay="Karl"
            onChange={(s:string)=>{updateField("display_name", s)}}
        />
        <RTTextInput id='location' style={locationStyle} display={state.location}
            defaultDisplay="Location"
            onChange={(s:string)=>{updateField("location", s)}}
        />
    </div>)
}

export default ProfileInfo;