import React from "react";

interface ProgressNodeProps{
    index: number
    current: number
}
/**
 * Returns the special circular nodes of the progress bar depending on where it's completed
 * and if the user is currently here
 * @param props provides the information for index and the users current progress
 * @returns The node in all 3 states
 */
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