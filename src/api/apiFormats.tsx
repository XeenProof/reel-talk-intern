/**
 * Just a few formats for the api to extract
 */

export interface Movie{
    id:number,
    name:string,
    genre:number[],
    image:string
}

export interface Genre{
    id:number,
    genre:string,
    icon:string,
    selected?:boolean
}