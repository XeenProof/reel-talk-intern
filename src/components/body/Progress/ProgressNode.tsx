import React from "react";

interface ProgressNodeProps{
    index: number
    current: number
}

const ProgressNode:React.FC<ProgressNodeProps> = (props:ProgressNodeProps) => {
    const { index, current } = props;

    const id = `node-${index}`

    const activated = (index <= current);
    const isCurrent = (index === current);

    const activeStyle = activated?'process-node-active':'process-node'
    const className = `circle ${activeStyle}`

    return (
        <div id={id} className={className}>
            {(isCurrent)?<div className="process-node-current circle center"/>:<></>}
        </div>
)
}

export default ProgressNode;