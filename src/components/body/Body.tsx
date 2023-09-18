import React from "react";
import ProcessBarV2 from "./ProgressBar/ProgressBarV2";
import BodyContent from "./BodyContent";
import ProgressBarV3 from "./Progress/Progress";



const Body:React.FC = () => {
    return <div id="body">
        <ProcessBarV2 current={5} total={6}/>
        <ProgressBarV3/>
        <BodyContent/>
    </div>
}

export default Body