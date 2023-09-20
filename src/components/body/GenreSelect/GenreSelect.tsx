import React, { useContext, useState } from "react";
import GenreList from "./GenreList";
import ExpandButton from "../../common/ExpandButton";
import Progression from "../Progression/Progression";
import { UserFormContext } from "../../../context/UserFormContext";
import { RTButtonDesigns } from "../../common/RTButton";

/**
 * The main page foe the select 3 genre page
 * @returns The genre page
 */
const GenreSelect:React.FC = () => {
    const [expand, setExpand] = useState<boolean>(false);
    const {state} = useContext(UserFormContext)
    const canProceed:boolean = state.GenreId.length >= 3;

    return (
        <div id='genre-display-main' className="vertical-display center">
            <div id="genre-display-title" className="genre-text center">
                Select your top 3 genres for movies and TV
            </div>
            <GenreList display={expand?0:16}/>
            <ExpandButton state={expand} setState={setExpand} id='genre-expand'/>
            <Progression id='genre-select-progression' nextStyle={canProceed?RTButtonDesigns.PRIMARY:RTButtonDesigns.DISABLED}/>
        </div>
    )
}

export default GenreSelect;