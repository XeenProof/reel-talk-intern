import React from "react";
import ProgressBar from "./ProgressBar";
import ProgressNodes from "./ProgressNodes";

export interface ProgressProps{
    current: number;
    total: number;
    className?:string;
}

const Progress:React.FC<ProgressProps> = (props:ProgressProps) => {
    const { current, total, className=''} = props;

    return (<div id='process' className={`process center ${className}`}>
        <ProgressBar current={current} total={total}/>
        <ProgressNodes current={current} total={total}/>
    </div>)
}

export default Progress;