import React from "react";
import { useNavigate } from 'react-router-dom';
//material-ui
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
//style
import { sideBarStyle } from "./SideBar";

const SignInButton = () => {
    const navigate = useNavigate();
    
    return (
        <Button 
            onClick={()=> navigate('/signin')}
            sx={{ 
                color: "#ffffff",
                display: "inline-block",
                fontSize: "1em",
                height: sideBarStyle.maxSize
            }}
        >       
            <Icon sx={{ mr: "0.5em" }}>
                <LoginIcon />
            </Icon>
            SIGN IN
        </Button>
    )
}

export default SignInButton