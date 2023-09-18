import React from "react";
import BodyContent from "./BodyContent";
import Progress from "./Progress/Progress";
import Progression from "./Progression/Progression";



const Body:React.FC = () => {
    return <div id="body">
        <Progress current={5} total={6} className="progress-position"/>
        <BodyContent/>
        <Progression/>
    </div>
}

export default Body