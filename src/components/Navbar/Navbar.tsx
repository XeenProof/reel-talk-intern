import React, {useContext} from "react";
import { UserFormContext } from "../../context/UserFormContext";
import NavbarButton from "./NavbarButton";
import NavbarLogo from "./NavbarLogo";
import NavbarProfile from "./NavbarProfile";
import SearchBar from "./SearchBar";

/**
 * This is the main navbar of the project.
 * Right now there is no props because so the pages displayed are of the user already logged in
 * @returns 
 */
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
                <NavbarButton onClick={()=>{handleClick("Browze")}} id="Browze">Browse</NavbarButton>
                <NavbarButton onClick={()=>{handleClick("Community")}} id='Community'>Community</NavbarButton>
            </div>
            <div className='btn-group'>
                <SearchBar/>
            </div>
            <div  className='btn-group'>
                <NavbarButton onClick={()=>{handleClick("Watchlist")}} id="Watchlist">Watchlist</NavbarButton>
                <NavbarProfile/>
            </div>
        </div>
    </div>
}

export default Navbar;