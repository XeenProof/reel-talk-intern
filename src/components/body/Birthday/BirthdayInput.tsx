import React, { ChangeEvent, ReactElement, useContext } from 'react';
import { UserFormContext } from '../../../context/UserFormContext';

interface BirthdayInputProps{
    children?: ReactElement|string,
    min?:number,
    max?:number,
    placeholder:string,
    value: number,
    field: string
}

const BirthdayInput:React.FC<BirthdayInputProps> = (props:BirthdayInputProps) => {
    const {children, min=0, max=9999, placeholder, value, field} = props;
    const {updateField} = useContext(UserFormContext)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        updateField(field, e.target.value)
    }

    return (
        <div className='birthday-input-full vertical-display'>
            <div className='birthday-input-text'>
                {children}
            </div>
            <input type="number" min={min} max={max} className='birthday-input'
                placeholder={placeholder} defaultValue={value} onChange={handleChange}
            />
        </div>
        
        
    )
}

export default BirthdayInput;