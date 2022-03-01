import React from "react";
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";

import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
        createStyles({
            maxSize: {
                height: "100%",
                width: "100%"
            }
        }),
    );


const SignUpButton = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
        <Button 
            onClick={()=> navigate('/signup')}
            className={classes.maxSize}
            sx={{color: "white", fontSize: "16px", display: "inline-block" }}
        >
            <Icon sx={{mr: "0.5em"}}>
                <ExitToAppIcon />
            </Icon>
            SIGN UP
        </Button>
    )
}

export default SignUpButton