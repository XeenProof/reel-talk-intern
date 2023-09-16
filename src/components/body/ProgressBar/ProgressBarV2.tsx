import React from "react";

interface PBProps{
    bgcolor?: string;
    current: number;
    total: number;
}

const ProcessBarV2:React.FC<PBProps> = ({bgcolor, current, total}:PBProps) =>{
    const percent = current/total*100;

    const fillerStyle = {
        width:`${percent}%`
    }

    const renderMarkers = (index:number) => {
        const percent = index/(total-1)*100;
        const style = {left:`${percent}%`}
        return <div className="marker" style={style}></div>
    }

    return (
        <div className="panel panel-default">
  <div className="panel-heading">
    <div className="panel-title">Project Milestones</div>
  </div>
  <div className="panel-body">
    <ul className="milestone-bar">
      <li>
        <div className="progress project-progress">
          <div className="progress-bar" style={{width:'100%'}}>
            100%
          </div>
        </div>
        <a href="/projects/24?milestone=18">Milestone 1</a>
      </li>

      <li>
        <div className="progress project-progress">
          <div className="progress-bar" style={{width:'100%'}}>
            100%
          </div>
        </div>
        <a href="/projects/24?milestone=39">Milestone 3</a>
      </li>

      <li>
        <div className="progress project-progress">
          <div className="progress-bar" style={{width:'50%'}}>
            50%
          </div>
        </div>
        <a href="/projects/24?milestone=48">Milestone 2</a>
      </li>
    </ul>
  </div>
</div>
      );
}

export default ProcessBarV2;