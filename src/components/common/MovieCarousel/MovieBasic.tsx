import React from 'react';

interface MovieBasicProps{
    id: number,
    src:string,
    className?:string
}

const MovieBasic:React.FC<MovieBasicProps> = (props:MovieBasicProps) => {
    const {id, src, className=""} = props
    const index = `c-movie-${id}`
    const classFull = `movie-image ${className}`

    return (<img id={index} src={src} className={classFull} alt={src}/>)
}

export default MovieBasic;