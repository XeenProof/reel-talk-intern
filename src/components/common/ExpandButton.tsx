import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface ExpandButtonProps {
    state:boolean,
    setState:React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Used as a show more or show less button
 * Designed with divs to make visuals easier
 * @param props The state settings
 * @returns Either show more or show less depending on states
 */
const ExpandButton:React.FC<ExpandButtonProps> = (props:ExpandButtonProps) => {
    const {state, setState} = props;
    const text = (state)?"show less":"show more";
    const Icon = (state)?BsChevronUp:BsChevronDown;

    const handleClick = () => {
        setState(!state)
    }
    
    return <div className="expand-button horizontal-display center expand-text" onClick={handleClick}>
        <div className="expand-text">{text}</div>
        <Icon className="expand-icon"/>
    </div>
}

export default ExpandButton;