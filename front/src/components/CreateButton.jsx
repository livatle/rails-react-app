import React from "react";
import {useNavigate} from 'react-router-dom'

const CreateButton = () => {
    const navigate = useNavigate();
    return (
        <div className="create-btn">
            <button onClick={() => navigate('/new')}>新規投稿</button>
        </div>
    )
}

export default CreateButton