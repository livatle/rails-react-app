import React from "react";
import { useNavigate } from "react-router-dom";
//material-ui
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
//style
import { buttonStyle } from "./MyPostsButton";

const SignUpButton = () => {
    const navigate = useNavigate();
    
    return (
        <Button 
            onClick={()=> navigate('/signup')}
            className="c-section"
            sx={buttonStyle}
        >
            <Icon sx={{mr: "0.5em"}}>
                <ExitToAppIcon />
            </Icon>
            SIGN UP
        </Button>
    )
}

export default SignUpButton