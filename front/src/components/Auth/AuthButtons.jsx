import React, { useContext } from "react";
// context
import { AuthContext } from '../../App';
//material-ui
import { MenuItem, Typography } from '@mui/material';
//component
import { MyPostsButton, SignInButton, SignUpButton, SignOutButton } from './index'


const AuthButtons = () => {
  const { isSignedIn, loading } = useContext(AuthContext);
  
      //ログイン判定より先にリダイレクトすることを防ぐ
      if (!loading) {
          //ログイン中の場合、マイページボタンと、サインアウトボタンを表示
          if (isSignedIn) {
            return (
              <>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography className="c-section">
                    <MyPostsButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em", mt: "20em"}}>
                  <Typography className="c-section">
                    <SignOutButton />
                  </Typography>
                </MenuItem>
              </>
            );
          //ログインしていない場合、サインインボタンと、サインアウトボタンを表示
          } else {
            return (
              <>
                <MenuItem sx={{ height: "5em", mt: "5em" }}>
                  <Typography className="c-section">
                    <SignInButton />
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ height: "5em" }}>
                  <Typography className="c-section" >
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