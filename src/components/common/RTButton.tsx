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
/**
 * Provides the basic 4 button designs that is shown on the figma page
 * I decided to hold off on the large and small option since that isn't needed at the moment
 * @param props The adjustible information for this button
 * @returns The buttons with the correct designs
 */
const RTButton:React.FC<RTButtonProps> = (props:RTButtonProps) => {
    const {id, 
        design, 
        children, 
        onClick=()=>{console.log("none assigned", children)}, 
        style={}}
         = props;

    const handleClick = ():void => {
        if(design === RTButtonDesigns.DISABLED){return;}
        onClick();
    }

    return(
        <button id={id} className={design} onClick={handleClick} style={style}>
            {children}
        </button>
    )
}

export default RTButton