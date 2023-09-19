import React from 'react';
import BirthdayMovies from './BirthdayMovies';
import BirthdayFields from './BirthdayFields';
import Progression from '../Progression/Progression';

const Birthday:React.FC = () => {
    return (
    <div className='birthday-holder vertical-display'>
        <div className='birthday-main center'>
            <BirthdayFields/>
            <BirthdayMovies/>
        </div>
        <Progression/>
    </div>)
}

export default Birthday;