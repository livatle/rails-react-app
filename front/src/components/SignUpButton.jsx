import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const SignUpButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <Button 
                onClick={()=> navigate('/signup')}
                sx={{color: "white", display: "inline-block" }}
                >
                    SIGN UP
            </Button>
        </>
    )
}

export default SignUpButton