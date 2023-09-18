import React, { ReactElement } from 'react';

interface RTButtonProps{
    id: string,
    className: string,
    children: ReactElement|string
    onClick?: () => {}
}

const RTButton:React.FC<RTButtonProps> = (props:RTButtonProps) => {
    const {id, className, children, onClick=()=>{console.log("none assigned")}} = props;

    return(
        <button id={id} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default RTButton