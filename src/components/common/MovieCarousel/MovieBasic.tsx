import React from 'react';

interface MovieBasicProps{
    id: number,
    src:string,
    className?:string
}

/**
 * The is to create a single card for the caroucel
 * @param props The info movie we want to display
 * @returns A movie card for the carousel
 */
const MovieBasic:React.FC<MovieBasicProps> = (props:MovieBasicProps) => {
    const {id, src, className=""} = props
    const index = `c-movie-${id}`
    const classFull = `movie-image ${className}`

    return (<img id={index} src={src} className={classFull} alt={src}/>)
}

export default MovieBasic;