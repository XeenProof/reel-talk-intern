import React from "react";
import { ProgressProps } from "./Progress";



const ProgressBar:React.FC<ProgressProps>= (props:ProgressProps) => {
    const { current, total } = props;
    const percent = current/total*100;

    const style = {
        width: `${percent}%`
    }
    
    return(
        <div className="progress-bar">
            <div className="progress-bar-filler" style={style}></div>
        </div>
    )
}

export default ProgressBar;