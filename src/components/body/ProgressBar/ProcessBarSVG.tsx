import React from "react";

interface PBProps{
    bgcolor?: string;
    current: number;
    total: number;
}

const ProcessBarSVG:React.FC<PBProps> = ({bgcolor, current, total}:PBProps) =>{
    const percent = current/total*100;
    const percentText = `${percent}%`

    const fillerStyle = {
        width:`${percent}%`
    }

    const renderMarkers = (index:number) => {
        const percent = index/(total-1)*100;
        const style = {left:`${percent}%`}
        return <div className="marker" style={style}></div>
    }

    return (
        <div id="process-bar-holder">
           <svg id="line-progress" height="120" width="120">
            <g className="progress-container">
                <line x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                strokeWidth="30" />
            </g>
            <g className="progress-content">
                <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="#C2E362" 
                    fill="transparent" 
                    strokeDasharray="100%" 
                    strokeDashoffset={percentText}
                    strokeWidth="28" />
            </g>
            <text className="percentage" x="40%" y="55%">{percentText}</text>
            </svg>   
        </div>
      );
}

export default ProcessBarSVG;