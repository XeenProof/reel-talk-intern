import React from 'react';
import RTButton, { RTButtonDesigns } from '../common/RTButton';
import Progression from './Progression/Progression';

/**
 * This acts as a placeholder content for the pages that isn't developed
 * @returns Placeholder Contents
 */
const BodyContent:React.FC = () => {

    return(
        <div id='placeholder-main' className='center vertical-display'>
            <div id='placeholder-text' className='center profile-display vertical-display'>
                <div id='placeholder-text-1' className="profile-title">
                    Still in Development
                </div>
                <div id='placeholder-text-2' className="profile-text">
                    Using this page to display some random elements
                </div>
                <Progression id={"placeholder"}/>
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