import React, { useContext } from "react";
// context
import { AuthContext } from '../App';
import { createStyles, makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { SignInButton, SignUpButton, SignOutButton, MyPostsButton } from './index'



const useStyles = makeStyles(() =>
        createStyles({
            maxSize: {
                height: "100%",
                width: "100%"
            }
        }),
    );

const AuthButtons = () => {
  const classes = useStyles();
    const { loading, isSignedIn } = useContext(AuthContext);
        if (!loading) {
            if (isSignedIn) {
              return (
                <>
                  <MenuItem>
                    <Typography className={classes.maxSize}>
                      <MyPostsButton />
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{mt: "320px"}}>
                    <Typography className={classes.maxSize}>
                      <SignOutButton />
                    </Typography>
                  </MenuItem>
                </>

              );
            } else {
              return (
                <>
                  <MenuItem>
                    <Typography className={classes.maxSize}>
                      <SignInButton />
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography
                    className={classes.maxSize}>
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