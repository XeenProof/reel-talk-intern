import React from "react";
import {AiOutlineSearch} from "react-icons/ai"

const Navbar:React.FC = () => {
    const handleClick = (text:string) => {
        console.log(text);
    }

    return <div id='navbar'>
        <div id='navbar-content'>
            <div className='btn-group'>
                <button className='btn' type='button' onClick={()=>{handleClick('Browse')}}>
                    Browse
                </button>
                <button className='btn' type='button' onClick={()=>{handleClick('Community')}}>
                    Community
                </button>
            </div>
            <div className='btn-group'>
                <AiOutlineSearch/>
                <input type="search" id="search" name="search" placeholder="Search.."/>
            </div>
            <div className='btn-group'>
                <button className='btn' type='button' onClick={()=>{handleClick('Browse')}}>
                    Browse
                </button>
            </div>
        </div>
    </div>
}

export default Navbar;