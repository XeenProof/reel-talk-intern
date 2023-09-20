import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./body/Body";

/**
 * This acts as a starting point for the components folder
 * @returns The starting point in the application
 */
const ReelTalk:React.FC = () => {
    
    
    return (<div id='main-background'>
        <Navbar/>
        <Body/>
    </div>);
}

export default ReelTalk;