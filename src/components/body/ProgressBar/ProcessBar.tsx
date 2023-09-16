import React from "react";

interface PBProps{
    bgcolor?: string;
    current: number;
    total: number;
}

const ProcessBar:React.FC<PBProps> = ({bgcolor, current, total}:PBProps) =>{
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
        <div id="process-bar-holder">
            <div className="process-bar-container">
            <div style={fillerStyle} className="process-bar-filler">
                <span>{`${current}/${total}%`}</span>
            </div>
            </div>
            <div className="marker-list">
                {Array(total).fill(0).map((_, index)=>{
                    return renderMarkers(index);
                })
                }
            </div>
        </div>
      );
}

export default ProcessBar;