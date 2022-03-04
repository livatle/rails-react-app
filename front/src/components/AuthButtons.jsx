import React, { useContext } from "react";
// context
import { AuthContext } from '../App';
//material-ui
import { MenuItem, Typography } from '@mui/material';
//component
import { MyPostsButton, SignInButton, SignUpButton, SignOutButton } from './index'


const AuthButtons = () => {
  const { isSignedIn, loading } = useContext(AuthContext);
  
      if (!loading) {
          if (isSignedIn) {
            return (
              <>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography className="c-box">
                    <MyPostsButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em", mt: "20em"}}>
                  <Typography className="c-box">
                    <SignOutButton />
                  </Typography>
                </MenuItem>
              </>
            );
          } else {
            return (
              <>
                <MenuItem sx={{ height: "5em", mt: "5em" }}>
                  <Typography className="c-box">
                    <SignInButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography className="c-box" >
                    <SignUpButton />
                  </Typography>
                </MenuItem>
              </>
            );
          }
        } else {
          return <></>;
        }
}

export default AuthButtons