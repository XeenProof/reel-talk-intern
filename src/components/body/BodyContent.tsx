import React from 'react';
import RTButton from '../parts/RTButton';

const BodyContent:React.FC = () => {
    return(
        <div className='center'>
            <RTButton id="b1" className='button-primary'>Next</RTButton>
            <RTButton id="b2" className='button-secondary'>Next</RTButton>
            <RTButton id="b3" className='button-social'>Next</RTButton>
            <RTButton id="b4" className='button-disabled'>Next</RTButton>
        </div>
    )
}

export default BodyContent