import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { createStyles, makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

// api
import { signOut } from '../lib/api/auth';
// context
import { AuthContext } from '../App';

const useStyles = makeStyles(() =>
        createStyles({
            maxSize: {
                height: "100%",
                width: "100%"
            }
        }),
    );
const SignOutButton = () => {
    const classes = useStyles();
    const { setIsSignedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOut = async (e) => {
        try {
        const res = await signOut();

        if (res.data.success === true) {
            Cookies.remove('_access_token');
            Cookies.remove('_client');
            Cookies.remove('_uid');

            setIsSignedIn(false);
            navigate('/');
            console.log('succeeded in sign out');
        } else {
            console.log('failed in sign out');
        }
        } catch (e) {
        console.log(e);
        }
    };


    return (
        <>
            <Button 
                onClick={handleSignOut}
                sx={{color: "white", fontSize: "16px", display: "inline-block"}}
                className={classes.maxSize}
                >
                    <Icon sx={{mr: "0.5em"}}>
                        <LogoutIcon />
                    </Icon>
                    SIGN OUT
            </Button>
        </>
    )

}

export default SignOutButton