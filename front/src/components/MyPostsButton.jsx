import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const MyPostsButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <Button 
                onClick={()=> navigate('/user/myposts')}
                sx={{color: "white", display: "inline-block"}}
                >
                    My Page
            </Button>
        </>
    )
}

export default MyPostsButton