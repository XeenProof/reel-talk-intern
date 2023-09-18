import React, { CSSProperties, ReactElement } from 'react';

interface RTButtonProps{
    id: string,
    design: RTButtonDesigns,
    children: ReactElement|string,
    onClick?: () => void,
    style?: CSSProperties
}

export enum RTButtonDesigns{
    PRIMARY='button-primary',
    SECONDARY='button-secondary',
    SOCIAL='button-social',
    DISABLED='button-disabled'
}

const RTButton:React.FC<RTButtonProps> = (props:RTButtonProps) => {
    const {id, 
        design, 
        children, 
        onClick=()=>{console.log("none assigned", children)}, 
        style={}}
         = props;

    return(
        <button id={id} className={design} onClick={onClick} style={style}>
            {children}
        </button>
    )
}

export default RTButton