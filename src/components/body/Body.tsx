import React from "react";
import ProcessBarV2 from "./ProgressBar/ProgressBarV2";
import BodyContent from "./BodyContent";
import Progress from "./Progress/Progress";



const Body:React.FC = () => {
    return <div id="body">
        <ProcessBarV2 current={5} total={6}/>
        <Progress/>
        <BodyContent/>
    </div>
}

export default Body