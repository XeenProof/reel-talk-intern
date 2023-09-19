import React, { CSSProperties, ReactElement, useState } from 'react';
import {BiPencil} from 'react-icons/bi'

interface RTTextInputProps{
    id:string,
    className?: string,
    edit?:boolean,
    type?: string,
    style?:CSSProperties,
    onChange?:()=>void,
}

const RTTextInput:React.FC<RTTextInputProps> = (props:RTTextInputProps) => {
    const {id, style={}, onChange=()=>{}, type='text', className='rtinput-default'} = props

    const [edit, setEdit] = useState<boolean>(false)

    return(edit)?
        <input type={type} id={id} onChange={onChange} autoFocus style={style} className={className} onBlur={()=>{setEdit(false)}}/>:
        <div className='rtinput-display horizontal-display' style={style}>
            <div className='horizontal-display'>Text</div>
            <BiPencil  className="input-icon" onClick={()=>{setEdit(true)}}/>
        </div>
    
}

export default RTTextInput