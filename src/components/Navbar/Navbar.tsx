import React, {useContext} from "react";
import {AiOutlineSearch} from "react-icons/ai"
import { UserFormContext } from "../../context/UserForm";
import NavbarButton from "./NavbarButton";
import NavbarLogo from "./NavbarLogo";
import NavbarProfile from "./NavbarProfile";

const Navbar:React.FC = () => {
    const {state, updateField} = useContext(UserFormContext);

    const handleClick = (text:string) => {
        updateField("display_name", text);
        console.log(state);
    }

    return <div id='navbar'>
        <div id='navbar-content'>
            
            <div className='btn-group'>
                <NavbarLogo/>
                <NavbarButton onClick={()=>{handleClick("Browze")}}>Browse</NavbarButton>
                <NavbarButton onClick={()=>{handleClick("Community")}}>Community</NavbarButton>
            </div>
            <div className='btn-group'>
                <AiOutlineSearch className="btn"/>
                <input type="search" id="search" name="search" placeholder={`Search..${state.display_name}`}/>
            </div>
            <div onClick={()=>{handleClick("Watchlist")}} className='btn-group'>
                <NavbarButton>Watchlist</NavbarButton>
                <NavbarProfile/>
            </div>
        </div>
    </div>
}

export default Navbar;