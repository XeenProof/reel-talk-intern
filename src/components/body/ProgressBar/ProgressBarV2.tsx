import React, { useContext } from "react";
import { UserFormContext } from "../../../context/UserForm";

interface PBProps{
    bgcolor?: string;
    current: number;
    total: number;
}

const ProcessBarV2:React.FC<PBProps> = ({bgcolor, current, total}:PBProps) =>{
    //const percent = current/total*100;
    const {state} = useContext(UserFormContext);

    return (
        <div className="container">
	<div className="row"><br/>
		<div className="col-md-12">
    	<div className="progress">
            <div className="one primary-color"></div>
            <div className="two primary-color"></div>
            <div className="three primary-color"></div>
  			<div className="progress-bar" style={{width: '70%'}}>{state.display_name}</div>
		  </div>
	  </div>
	</div>
</div>
      );
}

export default ProcessBarV2;