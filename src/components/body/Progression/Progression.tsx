import React, { CSSProperties, useContext } from "react";
import RTButton, { RTButtonDesigns } from "../../common/RTButton";
import { UserFormContext } from "../../../context/UserFormContext";

interface ProgressionProps{
    nextText?: string,
    prevText?: string,
    nextFunc?: () => void,
    prevFunc?: () => void,
    nextStyle?: RTButtonDesigns,
    prevStyle?: RTButtonDesigns
}

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
        nextText = "Next",
        prevText = "Back",
        nextFunc = handleNext,
        prevFunc = handlePrev,
        nextStyle = RTButtonDesigns.PRIMARY,
        prevStyle = RTButtonDesigns.SOCIAL
    } = props
    
    

    const style:CSSProperties = {margin:'16px'}

    return (
    <div className='center'>
        <RTButton id="b1" design={prevStyle} style={style} onClick={prevFunc}>
            {prevText}
        </RTButton>
        <RTButton id="b2" design={nextStyle} style={style} onClick={nextFunc}>
            {nextText}
        </RTButton>
    </div>
    )
}

export default Progression;