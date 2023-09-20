import React, { ChangeEvent, ReactElement, useContext } from 'react';
import { UserFormContext } from '../../../context/UserFormContext';

interface BirthdayInputProps{
    children?: ReactElement|string,
    min?:number,
    max?:number,
    placeholder:string,
    value: number|undefined,
    field: string
}

/**
 * Creates a single input field for birthday entry
 * @param props The required info for the birthday field
 * @returns A single number input field for birthdays
 */
const BirthdayInput:React.FC<BirthdayInputProps> = (props:BirthdayInputProps) => {
    const {children, min=0, max=9999, placeholder, value, field} = props;
    const {updateField} = useContext(UserFormContext)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        let value = Math.max(min,Math.min(max, Number.parseInt(e.target.value)));
        updateField(field, value)
    }

    return (
        <div className='birthday-input-full vertical-display'>
            <div className='birthday-input-text'>
                {children}
            </div>
            <input type="number" min={min} max={max} className='birthday-input'
                placeholder={placeholder} value={value} onChange={handleChange}
            />
        </div>
        
        
    )
}

export default BirthdayInput;