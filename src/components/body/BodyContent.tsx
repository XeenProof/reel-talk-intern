import React from 'react';
import RTButton, { RTButtonDesigns } from '../common/RTButton';
import Progression from './Progression/Progression';

const BodyContent:React.FC = () => {

    return(
        <div className='center vertical-display'>
            <div className='center profile-display vertical-display'>
                <div className="profile-title">
                    Still in Development
                </div>
                <div className="profile-text">
                    Using this page to display some random elements
                </div>
                <Progression/>
            </div>
            <div className='center'>
                <RTButton id="b1" design={RTButtonDesigns.PRIMARY}>Next</RTButton>
                <RTButton id="b2" design={RTButtonDesigns.SECONDARY}>Next</RTButton>
                <RTButton id="b3" design={RTButtonDesigns.SOCIAL}>Next</RTButton>
                <RTButton id="b4" design={RTButtonDesigns.DISABLED}>Next</RTButton>
            </div>
        </div>
    )
}

export default BodyContent