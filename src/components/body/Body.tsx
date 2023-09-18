import React from "react";
import ProcessBarV2 from "./ProgressBar/ProgressBarV2";



const Body:React.FC = () => {
    return <div id="body">
        
            <ProcessBarV2 current={5} total={6}/>
        
    </div>
}

export default Body