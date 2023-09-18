import React from "react";

export interface ProgressBarProps{
    current: number;
    total: number;
}

const ProgressBar:React.FC<ProgressBarProps>= (props:ProgressBarProps) => {
    const { current, total } = props;
    const percent = current/(total-1)*100;

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