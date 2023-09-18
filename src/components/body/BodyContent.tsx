import React from 'react';
import RTButton, { RTButtonDesigns } from '../common/RTButton';

const BodyContent:React.FC = () => {

    return(
        <div className='center'>
            <RTButton id="b1" design={RTButtonDesigns.PRIMARY}>Next</RTButton>
            <RTButton id="b2" design={RTButtonDesigns.SECONDARY}>Next</RTButton>
            <RTButton id="b3" design={RTButtonDesigns.SOCIAL}>Next</RTButton>
            <RTButton id="b4" design={RTButtonDesigns.DISABLED}>Next</RTButton>
        </div>
    )
}

export default BodyContent