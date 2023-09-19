import React, { useContext } from 'react';
import BirthdayMovies from './BirthdayMovies';
import BirthdayFields from './BirthdayFields';
import Progression from '../Progression/Progression';
import { UserFormContext } from '../../../context/UserFormContext';
import { RTButtonDesigns } from '../../common/RTButton';

const Birthday:React.FC = () => {
    const {state} = useContext(UserFormContext)

    const disabled:boolean = (state.DoBDay === undefined || state.DoBMonth === undefined || state.DoBYear === undefined)

    return (
    <div className='birthday-holder vertical-display'>
        <div className='birthday-main center'>
            <BirthdayFields/>
            <BirthdayMovies/>
        </div>
        <Progression nextStyle={disabled?RTButtonDesigns.DISABLED:RTButtonDesigns.PRIMARY}/>
    </div>)
}

export default Birthday;