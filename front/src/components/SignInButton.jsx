import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SignInButton = () => {
    const navigate = useNavigate();
    return (
        <>
            <Button 
                onClick={()=> navigate('/signin')}
                sx={{color: "white", display: "inline-block"}}
            >
                    SIGN IN
            </Button>
        </>
    )
}

export default SignInButton