import React, { CSSProperties } from "react";
import RTTextInput from "../../common/RTTextInput";

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

    return (<div className="profile-info">
        <RTTextInput id='display-name' style={nameStyle}/>
        <RTTextInput id='location' style={locationStyle}/>
    </div>)
}

export default ProfileInfo;