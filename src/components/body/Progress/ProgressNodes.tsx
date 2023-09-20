import React from "react";
import ProgressNode from "./ProgressNode";


interface ProgressNodesProps{
    current: number
    total: number
}

/**
 * A place to generate and place all the nodes needed for the progress bar
 * @param props current and toal
 * @returns The nodes properly spaced
 */
const ProgressNodes:React.FC<ProgressNodesProps> = (props:ProgressNodesProps) => {
    const { current, total } = props;
    

    return (
        <div className='process-nodes cover'>
            {Array(total).fill(null).map(
                (_, index)=>{
                    return <ProgressNode current={current} index={index}/>
                }
            )}
        </div>
)
}

export default ProgressNodes;