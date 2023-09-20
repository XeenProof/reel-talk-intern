import React from "react";

export interface ProgressBarProps{
    current: number;
    total: number;
}

/**
 * This is the progress bar itself, including the filler
 * @param props Info to calculate the total percent of the bar filled
 * @returns 
 */
const ProgressBar:React.FC<ProgressBarProps>= (props:ProgressBarProps) => {
    const { current, total } = props;
    const percent = current/(total)*100;

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