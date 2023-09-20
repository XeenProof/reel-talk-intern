import React, { useContext, useState } from "react";
import GenreList from "./GenreList";
import ExpandButton from "../../common/ExpandButton";
import Progression from "../Progression/Progression";
import { UserFormContext } from "../../../context/UserFormContext";
import { RTButtonDesigns } from "../../common/RTButton";

const GenreSelect:React.FC = () => {
    const [expand, setExpand] = useState<boolean>(false);
    const {state} = useContext(UserFormContext)
    const canProceed:boolean = state.GenreId.length >= 3;

    return (
        <div className="vertical-display center">
            <div className="genre-text center">
                Select your top 3 genres for movies and TV
            </div>
            <GenreList display={expand?0:16}/>
            <ExpandButton state={expand} setState={setExpand}/>
            <Progression nextStyle={canProceed?RTButtonDesigns.PRIMARY:RTButtonDesigns.DISABLED}/>
        </div>
    )
}

export default GenreSelect;