import React from "react";
import Navbar from "./Navbar";
import ProcessBar from "./body/ProgressBar/ProcessBar";
import Body from "./body/Body";

interface ReelTalkProps{

}

const ReelTalk:React.FC = (props:ReelTalkProps) => {
    
    
    return (<div id='main-background'>
        <Navbar/>
        <Body/>
    </div>);
}

export default ReelTalk;