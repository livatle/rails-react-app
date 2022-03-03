import React from "react";
import { useNavigate } from "react-router-dom";
//material-ui
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { sideBarStyle } from "./SideBar";

const SignUpButton = () => {
    const navigate = useNavigate();
    
    return (
        <Button 
            onClick={()=> navigate('/signup')}
            sx={{
                color: "#ffffff",
                display: "inline-block",
                fontSize: "1em",
                height: sideBarStyle.maxSize.height,
                width: sideBarStyle.maxSize.width
            }}
        >
            <Icon sx={{mr: "0.5em"}}>
                <ExitToAppIcon />
            </Icon>
            SIGN UP
        </Button>
    )
}

export default SignUpButton