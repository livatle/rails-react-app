import React, { useContext } from "react";
// context
import { AuthContext } from '../App';

import { SignInButton, SignUpButton, SignOutButton, MyPostsButton } from './index'

const AuthButtons = () => {
    const { loading, isSignedIn } = useContext(AuthContext);
        if (!loading) {
            if (isSignedIn) {
              return (
                <>
                  <MyPostsButton />
                  <SignOutButton />
                </>
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