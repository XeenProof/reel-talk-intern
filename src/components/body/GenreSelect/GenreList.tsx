import React, { useContext } from "react";
import GenreCheckbox from "./GenreCheckbox";
import { QueryContext } from "../../../context/QueryContext";
import { Genre } from "../../../api/apiFormats";
import { UserFormContext } from "../../../context/UserFormContext";

interface GenreListProps{
    display?:number
}

/**
 * Creates a gird design for the genre cards
 * Map and filters the genre list that is currently visible
 * @param props The number of genres to display
 * @returns The grid for displaying the genre cards
 */
const GenreList:React.FC<GenreListProps> = (props:GenreListProps) => {
    const { queryGenre } = useContext(QueryContext) 
    const {state} = useContext(UserFormContext)
    const list = queryGenre();
    const display = (props.display)?props.display:list.length;

    const displayList = list.filter(
        (_, i:number)=>{return i < display}
    ).map((g:Genre)=>{
        return {
            ...g, 
            selected:state.GenreId.includes(g.id)
        }})

    return (
        <div className="genre-display center">
            {
                displayList.map((g:Genre)=>{return <GenreCheckbox genre={g}/>})
            }
        </div>
    )
}

export default GenreList;