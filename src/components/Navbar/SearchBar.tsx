import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

/**
 * The design for the search bar is here
 * @returns The search bar
 */
const SearchBar:React.FC = () => {


    return <div id='search' className="search-bar-main">
        <AiOutlineSearch className="search-icon"/>
        <input type="search" id="search-text" name="search" 
        placeholder={`Search..`} className="search-input"/>
    </div>
}

export default SearchBar;