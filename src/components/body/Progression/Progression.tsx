import React, { CSSProperties } from "react";
import RTButton, { RTButtonDesigns } from "../../common/RTButton";

interface ProgressionProps{
    nextText?: string,
    prevText?: string,
    nextFunc?: () => void,
    prevFunc?: () => void
}

const Progression:React.FC<ProgressionProps> = (props:ProgressionProps) => {
    const {
        nextText = "Next",
        prevText = "Back",
        nextFunc = () => {console.log(`${nextText} not implemented`)},
        prevFunc = () => {console.log(`${prevText} not implemented`)}
    } = props;

    const style:CSSProperties = {
        margin:'40px'
    }

    return (
    <div className='center'>
        <RTButton id="b1" design={RTButtonDesigns.PRIMARY} style={style}>
            Next
        </RTButton>
        <RTButton id="b2" design={RTButtonDesigns.SECONDARY} style={style}>
            Next
        </RTButton>
    </div>
    )
}

export default Progression;