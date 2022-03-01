import React, { useContext } from "react";
// context
import { AuthContext } from '../App';

import Typography from '@mui/material/Typography';
import { SignInButton, SignUpButton, SignOutButton, MyPostsButton } from './index'

const AuthButtons = () => {
    const { loading, isSignedIn } = useContext(AuthContext);
        if (!loading) {
            if (isSignedIn) {
              return (
                <>
                  <Typography variant="body2" color="text.secondary">
                    <MyPostsButton />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <SignOutButton />
                  </Typography>
                </>
              );
            } else {
              return (
                <>
                <Typography variant="body2" color="text.secondary">
                  <SignInButton />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <SignUpButton />
                </Typography>
                </>
              );
            }
          } else {
            return <></>;
          }
}

export default AuthButtons