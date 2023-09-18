import React, { ReactElement } from "react";

interface NavbarButtonProps{
    onClick?: () => {},
    children: ReactElement|string
}

const NavbarButton:React.FC<NavbarButtonProps> = (props: NavbarButtonProps) => {
    const {children, onClick = () => {console.log(children)}} = props

    return (
    <button className='btn' type='button' onClick={onClick}>
        {children}
    </button>)
}

export default NavbarButton;