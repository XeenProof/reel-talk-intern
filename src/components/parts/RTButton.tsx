import React, { ReactElement } from 'react';

interface RTButtonProps{
    id: string,
    className: string,
    children: ReactElement|string
    onClick?: () => {}
}

const RTButton:React.FC<RTButtonProps> = (props:RTButtonProps) => {
    const {id, className, children, onClick} = props;

    return(
        <button id={id} className={className} onClick={(onClick)?onClick:()=>{
            console.log("none assigned")
        }}>
            {children}
        </button>
    )
}

export default RTButton