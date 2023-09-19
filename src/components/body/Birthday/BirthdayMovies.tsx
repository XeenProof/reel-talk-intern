import React, { useContext } from 'react';
import MovieCarousel from '../../common/MovieCarousel/MovieCarousel';
import { QueryContext } from '../../../context/QueryContext';
import { Movie } from '../../../api/apiFormats';

const BirthdayMovies:React.FC = () => {
    const {queryMovie} = useContext(QueryContext)

    const brthdayMovies = queryMovie().filter((m:Movie)=>{return m.genre.includes(-1)})

    return (<div className='birthday-movie'>
        <div className='birthday-movie-text center'>
            We love our birthday movies 🎉
        </div>
        <MovieCarousel movies={brthdayMovies}/>
    </div>)
}

export default BirthdayMovies;