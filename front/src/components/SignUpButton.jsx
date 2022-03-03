import React from "react";
import { useNavigate } from "react-router-dom";
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const useStyles = makeStyles(() =>
    createStyles({
        maxSize: {
            height: "100%",
            width: "100%"
        }
    }),
);


const SignUpButton = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    
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