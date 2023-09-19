import React, { useContext } from 'react';
import MovieCarousel from '../../common/MovieCarousel/MovieCarousel';
import { QueryContext } from '../../../context/QueryContext';

const BirthdayMovies:React.FC = () => {
    const {queryMovie} = useContext(QueryContext)

    return (<div className='birthday-movie'>
        <div className='birthday-movie-text center'>
            We love our birthday movies
        </div>
        <MovieCarousel movies={queryMovie()}/>
    </div>)
}

export default BirthdayMovies;