import React, { CSSProperties, useContext } from "react";
import RTButton, { RTButtonDesigns } from "../../common/RTButton";
import { UserFormContext } from "../../../context/UserFormContext";

interface ProgressionProps{
    id:string,
    nextText?: string,
    prevText?: string,
    nextFunc?: () => void,
    prevFunc?: () => void,
    nextStyle?: RTButtonDesigns,
    prevStyle?: RTButtonDesigns
}

/**
 * A feature used by each page.
 * An easy place for a next and back button to be placed
 * 
 * @param props Any minor changes needed to the buttons 
 * @returns The two buttons
 */
const Progression:React.FC<ProgressionProps> = (props:ProgressionProps) => {
    const {increment, decrement} = useContext(UserFormContext);

    const handleNext = () => {
        console.log("clicked");
        increment();
    }

    const handlePrev = () => {
        console.log("clicked");
        decrement();
    }

    const {
        id,
        nextText = "Next",
        prevText = "Back",
        nextFunc = handleNext,
        prevFunc = handlePrev,
        nextStyle = RTButtonDesigns.PRIMARY,
        prevStyle = RTButtonDesigns.SOCIAL
    } = props
    
    

    const style:CSSProperties = {margin:'16px'}

    return (
    <div id={id} className='center'>
        <RTButton id={`${id}-b1`} design={prevStyle} style={style} onClick={prevFunc}>
            {prevText}
        </RTButton>
        <RTButton id={`${id}-b2`} design={nextStyle} style={style} onClick={nextFunc}>
            {nextText}
        </RTButton>
    </div>
    )
}

export default Progression;