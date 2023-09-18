import React from "react";
import ProgressBar from "./ProgressBar";
import ProgressNodes from "./ProgressNodes";

export interface ProgressProps{
    current: number;
    total: number;
}

const Progress:React.FC<ProgressProps> = (props:ProgressProps) => {
    const { current, total } = props;

    return (<div id='process' className="process center">
        <ProgressBar current={current} total={total}/>
        <ProgressNodes current={current} total={total}/>
    </div>)
}

export default Progress;