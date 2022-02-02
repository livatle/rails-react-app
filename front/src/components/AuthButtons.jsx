import React, { useContext } from "react";
// context
import { AuthContext } from '../App';

import { SignInButton, SignUpButton, SignOutButton } from './index'

const AuthButtons = () => {
    const { loading, isSignedIn, setIsSignedIn, currentUser } = useContext(AuthContext);
        if (!loading) {
            if (isSignedIn) {
              return (
                <SignOutButton />
              );
            } else {
              return (
                <>
                    <SignInButton />
                    <SignUpButton />
                </>
              );
            }
          } else {
            return <></>;
          }
}

export default AuthButtons