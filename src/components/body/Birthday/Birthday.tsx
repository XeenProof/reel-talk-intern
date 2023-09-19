import React from 'react';
import BirthdayMovies from './BirthdayMovies';

const Birthday:React.FC = () => {
    return (<div className='birthday-main center'>
        <BirthdayMovies/>
        <BirthdayMovies/>
    </div>)
}

export default Birthday;