import React from "react";
import {NavLink} from 'react-router-dom'

const CreateButton = () => {
    return (
        <div className="create-btn">
            <NavLink to='/create'>新規投稿</NavLink>
        </div>
    )
}

export default CreateButton