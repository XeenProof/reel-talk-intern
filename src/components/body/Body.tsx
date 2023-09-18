import React, { useContext } from "react";
import BodyContent from "./BodyContent";
import Progress from "./Progress/Progress";
import Progression from "./Progression/Progression";
import { UserFormContext } from "../../context/UserForm";



const Body:React.FC = () => {
    const {state} = useContext(UserFormContext);

    return <div id="body">
        <Progress current={state.progress} total={6} className="progress-position"/>
        <BodyContent/>
        <Progression/>
    </div>
}

export default Body