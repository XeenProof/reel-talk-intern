import React, {useContext} from "react";
import { UserFormContext } from "../../context/UserFormContext";
import NavbarButton from "./NavbarButton";
import NavbarLogo from "./NavbarLogo";
import NavbarProfile from "./NavbarProfile";
import SearchBar from "./SearchBar";

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
                <SearchBar/>
                {/* <input type="search" id="search" name="search" placeholder={`Search..${state.display_name}`}/> */}
            </div>
            <div onClick={()=>{handleClick("Watchlist")}} className='btn-group'>
                <NavbarButton>Watchlist</NavbarButton>
                <NavbarProfile/>
            </div>
        </div>
    </div>
}

export default Navbar;