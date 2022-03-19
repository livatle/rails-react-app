import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
//material-ui
import { Button, Icon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
// api
import { signOut } from '../../lib/api/auth';
// context
import { AuthContext } from '../../App';
//style
import { buttonStyle } from "./MyPostsButton";

const SignOutButton = () => {
    const { setIsSignedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
        const res = await signOut();

        if (res.data.success === true) {
            Cookies.remove('_access_token');
            Cookies.remove('_client');
            Cookies.remove('_uid');

            setIsSignedIn(false);
            navigate('/');
            location.reload();
            console.log('succeeded in sign out');
        } else {
            console.log('failed in sign out');
            } 
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <Button 
            onClick={handleSignOut}
            className="c-section"
            sx={buttonStyle}
        >
            <Icon sx={{ mr: "0.5em" }}>
                <LogoutIcon />
            </Icon>
            SIGN OUT
        </Button>
    )

}

export default SignOutButton