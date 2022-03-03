import React, { useContext } from "react";
// context
import { AuthContext } from '../App';
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { MenuItem, Typography } from '@mui/material';
//component
import { MyPostsButton, SignInButton, SignUpButton, SignOutButton } from './index'

const useStyles = makeStyles(() =>
    createStyles({
        maxSize: {
            height: "100%",
            width: "100%"
        }
    }),
);

const AuthButtons = () => {
  const { isSignedIn, loading } = useContext(AuthContext);
  const classes = useStyles();
  
      if (!loading) {
          if (isSignedIn) {
            return (
              <>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography className={classes.maxSize}>
                    <MyPostsButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em", mt: "20em"}}>
                  <Typography className={classes.maxSize}>
                    <SignOutButton />
                  </Typography>
                </MenuItem>
              </>
            );
          } else {
            return (
              <>
                <MenuItem sx={{ height: "5em", mt: "5em" }}>
                  <Typography className={classes.maxSize}>
                    <SignInButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography className={classes.maxSize}>
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