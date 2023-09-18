import React, { CSSProperties, useContext } from "react";
import RTButton, { RTButtonDesigns } from "../../common/RTButton";
import { UserFormContext } from "../../../context/UserForm";

interface ProgressionProps{
    nextText?: string,
    prevText?: string,
    nextFunc?: () => void,
    prevFunc?: () => void
}

const Progression:React.FC<ProgressionProps> = (props:ProgressionProps) => {
    const {state, increment, decrement} = useContext(UserFormContext);
    
    const handleNext = () => {
        console.log("clicked");
        increment();
    }

    const handlePrev = () => {
        console.log("clicked");
        decrement();
    }

    const style:CSSProperties = {margin:'40px'}

    return (
    <div className='center'>
        <RTButton id="b1" design={RTButtonDesigns.PRIMARY} style={style} onClick={handlePrev}>
            Back
        </RTButton>
        <RTButton id="b2" design={RTButtonDesigns.SECONDARY} style={style} onClick={handleNext}>
            Next
        </RTButton>
    </div>
    )
}

export default Progression;