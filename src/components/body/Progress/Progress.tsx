import React from "react";
import ProgressBar from "./ProgressBar";
import ProgressNodes from "./ProgressNodes";

export interface ProgressProps{
    current: number;
    total: number;
    className?:string;
}

/**
 * This is the main progress bar.
 * The Design Document (Figma) only has 6 nodes but this is designed to be able to have as many nodes as needed
 * @param props 
 * @returns 
 */
const Progress:React.FC<ProgressProps> = (props:ProgressProps) => {
    const { current, total, className=''} = props;

    return (<div id='process' className={`process center ${className}`}>
        <ProgressBar current={current} total={total-1}/>
        <ProgressNodes current={current} total={total}/>
    </div>)
}

export default Progress;