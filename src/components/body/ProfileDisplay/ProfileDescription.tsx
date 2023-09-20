import React, { useContext } from "react";
import { UserFormContext } from "../../../context/UserFormContext";

const placeholderText = "I’m a huge horror movie buff that favors MCU over DC any day. I also love Crime shows and my favorite hero is Spiderman …"

/**
 * Creates the test are for descriptions
 * @returns The text area for descriptions
 */
const ProfileDescription:React.FC = () => {
    const {state, updateField} = useContext(UserFormContext)

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        updateField('description', e.target.value);
    }


    return <textarea className="description" defaultValue={state.description} placeholder={placeholderText}
        onChange={handleChange}
    />
}

export default ProfileDescription