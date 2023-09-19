import React, { ReactElement, useContext } from "react";
import BodyContent from "./BodyContent";
import Progress from "./Progress/Progress";
import { UserFormContext } from "../../context/UserFormContext";
import ProfileDisplay from "./ProfileDisplay/ProfileDisplay";



const Body:React.FC = () => {
    const {state} = useContext(UserFormContext);
    const {progress} = state

    const progressDisplay = (step:number):React.JSX.Element => {
        switch(step){
            case 1:
                return <ProfileDisplay/>
            default:
                return <BodyContent/>
        }
    }

    return <div id="body">
        <Progress current={state.progress} total={6} className="progress-position"/>
        {progressDisplay(progress)}
    </div>
}

export default Body