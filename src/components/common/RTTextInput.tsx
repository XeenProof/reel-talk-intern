import React, { CSSProperties, useState } from 'react';
import {BiPencil} from 'react-icons/bi'

interface RTTextInputProps{
    id:string,
    display:string,
    defaultDisplay?:string,
    className?: string,
    edit?:boolean,
    type?: string,
    style?:CSSProperties,
    onChange?:(s:string)=>void,
}

const RTTextInput:React.FC<RTTextInputProps> = (props:RTTextInputProps) => {
    const {id, 
        style={}, 
        onChange=(s:string)=>{}, 
        type='text', 
        className='rtinput-default', 
        display, 
        defaultDisplay = "Placeholder"
    } = props

    const [edit, setEdit] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }


    return(edit)?
        <input type={type} id={id} onChange={handleChange} autoFocus style={style} 
            className={className} onBlur={()=>{setEdit(false)}} defaultValue={display}
        />:
        <div className='rtinput-display horizontal-display' style={style}>
            <div className='horizontal-display'>{(display === '')?defaultDisplay:display}</div>
            <BiPencil  className="input-icon" onClick={()=>{setEdit(true)}}/>
        </div>
    
}

export default RTTextInput