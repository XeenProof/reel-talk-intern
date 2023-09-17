import React, {useContext} from "react";
import {AiOutlineSearch} from "react-icons/ai"
import UserFormContext from "../context/UserForm";

const Navbar:React.FC = () => {
    const state = useContext(UserFormContext);

    const handleClick = (text:string) => {
        console.log(state);
        
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
                <AiOutlineSearch className="btn"/>
                <input type="search" id="search" name="search" placeholder={`Search..${state.counter}`}/>
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