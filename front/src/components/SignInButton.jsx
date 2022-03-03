import React from "react";
import { useNavigate } from 'react-router-dom';
//material-ui
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
    createStyles({
        maxSize: {
            height: "100%",
            width: "100%"
        }
    }),
);

const SignInButton = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    
    return (
        <Button 
            onClick={()=> navigate('/signin')}
            className={classes.maxSize}
            sx={{color: "#ffffff", fontSize: "1em", display: "inline-block" }}
        >       
            <Icon sx={{mr: "0.5em"}}>
                <LoginIcon />
            </Icon>
            SIGN IN
        </Button>
    )
}

export default SignInButton