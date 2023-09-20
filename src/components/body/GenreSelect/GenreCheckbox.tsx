import React, { useContext } from "react";
import { Genre } from "../../../api/apiFormats";
import { UserFormContext } from "../../../context/UserFormContext";

interface ReactCheckboxProps{
    genre:Genre
}

const GenreCheckbox:React.FC<ReactCheckboxProps> = (props:ReactCheckboxProps) => {
    const {state, updateField} = useContext(UserFormContext)
    const {selected, id, genre, icon} = props.genre
    const className = (selected)?"genre-card-active":"genre-card";
    const idfull = `genre-${id}`
    const title = `${genre}${icon}`

    const handleClick = () => {
        if(!selected && state.GenreId.length >= 3){return;}
        let list = (selected)?state.GenreId.filter((n:number)=>{return n !== id}):[...state.GenreId, id]
        updateField("GenreId", list)
    }

    return <div id={idfull} className={className} onClick={handleClick}>
        <div>{title}</div>
        <input type="checkbox" className="genre-card-checkbox" checked={selected}/>
    </div>
}

export default GenreCheckbox;