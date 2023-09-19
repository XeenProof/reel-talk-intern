import React, { useContext } from "react";
import BodyContent from "./BodyContent";
import Progress from "./Progress/Progress";
import { UserFormContext } from "../../context/UserForm";
import ProfileDisplay from "./ProfileDisplay/ProfileDisplay";



const Body:React.FC = () => {
    const {state} = useContext(UserFormContext);

    return <div id="body">
        <Progress current={state.progress} total={6} className="progress-position"/>
        <ProfileDisplay/>
    </div>
}

export default Body