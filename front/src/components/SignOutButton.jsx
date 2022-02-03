import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

import Button from '@mui/material/Button';

// api
import { signOut } from '../lib/api/auth';
// context
import { AuthContext } from '../App';

const SignOutButton = () => {
    const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext)
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
                sx={{color: "white", display: "inline-block"}}
                >
                    SIGN OUT
            </Button>
        </>
    )

}

export default SignOutButton