import React, { useContext } from 'react';
import BirthdayMovies from './BirthdayMovies';
import BirthdayFields from './BirthdayFields';
import Progression from '../Progression/Progression';
import { UserFormContext } from '../../../context/UserFormContext';
import { RTButtonDesigns } from '../../common/RTButton';

/**
 * The main page for displaying the birthday page
 * @returns The birthday inputs and the birthday movie carousel
 */
const Birthday:React.FC = () => {
    const {state} = useContext(UserFormContext)

    const disabled:boolean = (state.DoBDay === undefined || state.DoBMonth === undefined || state.DoBYear === undefined)&&false

    return (
    <div id='birthday-page-main' className='birthday-holder vertical-display'>
        <div id='birthday-page-content' className='birthday-main center'>
            <BirthdayFields/>
            <BirthdayMovies/>
        </div>
        <Progression id='birthday-progression' nextStyle={disabled?RTButtonDesigns.DISABLED:RTButtonDesigns.PRIMARY}/>
    </div>)
}

export default Birthday;