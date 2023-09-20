import React, { useRef } from 'react';
import { Movie } from '../../../api/apiFormats';
import MovieBasic from './MovieBasic';

interface MovieCarouselProps{
    id: string,
    movies:Movie[]
}

/**
 * A scrollable by dragging carousel of movies
 * @param props the list of movies we want to display
 * @returns 
 */
const MovieCarousel:React.FC<MovieCarouselProps> = (props:MovieCarouselProps) => {
    const {id, movies} = props
    const scrollable = useRef<HTMLDivElement>(null);

    let isDown:boolean = false;
    let startX:number;
    let scrollLeft:number;

    const setIsDown = (bool: boolean):void => {
        if(!scrollable.current){return;}
        isDown = bool;
    }

    const mouseUp = ():void => {
        if(!scrollable.current){return;}
        setIsDown(false)
    }
    const mouseDown = (e:React.MouseEvent):void => {
        if(!scrollable.current){return;}
        setIsDown(true)
        startX = e.pageX - scrollable.current.offsetLeft;
        scrollLeft = scrollable.current.scrollLeft;
    }
    const mouseLeave = ():void => {
        if(!scrollable.current){return;}
        setIsDown(false)
    }
    const mouseMove = (e:React.MouseEvent):void => {
        if(!isDown || !scrollable.current){return;}
        e.preventDefault();
        const x = e.pageX - scrollable.current.offsetLeft;
        const walk = x - startX;
        scrollable.current.scrollLeft = scrollLeft - walk;
    }


    return <div id={id} className='movie-carousel horizontal-display'
        ref={scrollable}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        onMouseLeave={mouseLeave}
        onMouseMove={mouseMove}
        >
        {movies.map((m)=>{
            return <MovieBasic id={m.id} src={m.image}/>
        })}
    </div>
}

export default MovieCarousel;