import React from "react";
import BodyContent from "./BodyContent";
import Progress from "./Progress/Progress";



const Body:React.FC = () => {
    return <div id="body">
        <Progress current={5} total={6} className="progress-position"/>
        <BodyContent/>
    </div>
}

export default Body