import React from 'react';
import RTButton, { RTButtonDesigns } from '../common/RTButton';

const BodyContent:React.FC = () => {

    return(
        <div className='center'>
            <RTButton id="b1" style={RTButtonDesigns.PRIMARY}>Next</RTButton>
            <RTButton id="b2" style={RTButtonDesigns.SECONDARY}>Next</RTButton>
            <RTButton id="b3" style={RTButtonDesigns.SOCIAL}>Next</RTButton>
            <RTButton id="b4" style={RTButtonDesigns.DISABLED}>Next</RTButton>
        </div>
    )
}

export default BodyContent