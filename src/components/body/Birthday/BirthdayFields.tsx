import React, { useContext } from 'react';
import BirthdayInput from './BirthdayInput';
import { UserFormContext } from '../../../context/UserFormContext';

/**
 * Creates the design and input fields of the birthday page
 * @returns The field input side of the birthday page
 */
const BirthdayFields:React.FC = () => {
    const {state} = useContext(UserFormContext)

    return (
    <div className='birthday-fields vertical-display'>
        <div className='birthday-fields-text-holder'>
            <div className='birthday-fields-header horizontal-display'>
                <div style={{paddingTop:'6px'}}>Please provide your date of birth</div>
                <div style={{fontWeight:"400"}}>🎂</div>
            </div>
            <div className='birthday-field-text'>
            Date of birth will allow us to tailor age-appropriate content and will not be shared with any third parties.
            </div>
        </div>
        <div className='birthday-inputs horizontal-display'>
            <BirthdayInput placeholder={"MM"} min={1} max={12} field="DoBMonth" value={state.DoBMonth}>
                Month
            </BirthdayInput>
            <BirthdayInput placeholder={"DD"} min={1} max={31} field="DoBDay" value={state.DoBDay}>
                Day
            </BirthdayInput>
            <BirthdayInput placeholder={"YYYY"} field="DoBYear" value={state.DoBYear}>
                Year
            </BirthdayInput>
        </div>
    </div>)
}

export default BirthdayFields;