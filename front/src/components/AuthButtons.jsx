import React, { useContext } from "react";
// context
import { AuthContext } from '../App';
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { MenuItem, Typography } from '@mui/material';
//component
import { MyPostsButton, SignInButton, SignUpButton, SignOutButton } from './index'
import { sideBarStyle } from "./SideBar";
//style

const AuthButtons = () => {
  const { isSignedIn, loading } = useContext(AuthContext);
  
      if (!loading) {
          if (isSignedIn) {
            return (
              <>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography sx={{ height: sideBarStyle.maxSize.height, width: sideBarStyle.maxSize.width }}>
                    <MyPostsButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em", mt: "20em"}}>
                  <Typography sx={{ height: sideBarStyle.maxSize.height, width: sideBarStyle.maxSize.width }}>
                    <SignOutButton />
                  </Typography>
                </MenuItem>
              </>
            );
          } else {
            return (
              <>
                <MenuItem sx={{ height: "5em", mt: "5em" }}>
                  <Typography sx={{ height: sideBarStyle.maxSize.height, width: sideBarStyle.maxSize.width }}>
                    <SignInButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography sx={{ height: sideBarStyle.maxSize.height, width: sideBarStyle.maxSize.width }}>
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