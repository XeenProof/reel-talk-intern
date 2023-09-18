import React, { useContext } from "react";
import ProgressNode from "./ProgressNode";


interface ProgressNodesProps{
    current: number
    total: number
}

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