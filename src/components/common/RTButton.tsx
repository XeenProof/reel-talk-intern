import React, { ReactElement } from 'react';

interface RTButtonProps{
    id: string,
    style: RTButtonDesigns,
    children: ReactElement|string
    onClick?: () => {}
}

export enum RTButtonDesigns{
    PRIMARY='button-primary',
    SECONDARY='button-secondary',
    SOCIAL='button-social',
    DISABLED='button-disabled'
}

const RTButton:React.FC<RTButtonProps> = (props:RTButtonProps) => {
    const {id, style, children, onClick=()=>{console.log("none assigned")}} = props;

    return(
        <button id={id} className={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default RTButton