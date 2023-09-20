import React, { ReactElement } from "react";



interface NavbarButtonProps{
    id:string,
    onClick?: () => void,
    children: ReactElement|string
}

/**
 * The Element for the common Navbar buttons
 */
const NavbarButton:React.FC<NavbarButtonProps> = (props: NavbarButtonProps) => {
    const {id, children, onClick = () => {console.log(children)}} = props

    return (
    <button id={id} className='btn' type='button' onClick={onClick}>
        {children}
    </button>)
}

export default NavbarButton;