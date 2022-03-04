import React from "react";
import { NavLink } from 'react-router-dom';
//material-ui
import { Box, Button, TextField, Typography } from '@mui/material'
//coponent
import { AlertMessage } from './index'
//style
import { submitButtonStyle } from "./Form";

export const formStyle = {
  '& div': {
    width: "80%",
  },
  '& .MuiInputBase-input': {
    color: 'white'
  },
  '& label': {
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    mb: "2em",
    '& fieldset': {
      borderColor: 'white'
    }
  },
}

const SignForm = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        signType,
        name,
        setName,
        passwordConfirmation,
        setPasswordConfirmation,
        alertMessageOpen,
        setAlertMessageOpen
    } = props;

    return (
      <div className="p-box">
        {signType === 'signUp' ? (
          <h2 className="p-text">
            SIGN UP
          </h2>) : (
          <h2 className="p-text">
            SIGN IN
          </h2>
          ) 
        }
        {signType === 'signUp' && (
          <TextField
            sx={formStyle}
            label="username"
            value={name} 
            onChange={event => setName(event.target.value)}
          />
        )}
          <TextField
            sx={formStyle}
            label="email"
            type="email" 
            value={email} 
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            sx={formStyle}
            label="password"
            type="password" 
            value={password} 
            onChange={event => setPassword(event.target.value)}
          />
          {signType === 'signUp' && (
            <TextField
              sx={formStyle}
              variant='outlined'
              required
              label='Password Confirmation'
              type='password'
              value={passwordConfirmation}
              autoComplete='current-password'
              onChange={(event) =>
                setPasswordConfirmation(event.target.value)
              }
            />
          )}
          <Button
            sx={submitButtonStyle}
            variant="outlined"
            type="subimit" 
            onClick={handleSubmit} 
          >
              subimit
          </Button>
          {signType === 'signIn' && (
            <Box sx={{mt: "4em"}}>
              <Typography variant='body2'>
                <small className="u-text">Don't have an account? &nbsp;</small> 
                <NavLink 
                  to='/signup'
                >
                  <small className="c-text">Sign Up now!</small> 
                </NavLink>
              </Typography>
            </Box>
          )}
          <AlertMessage
            open={alertMessageOpen}
            setOpen={setAlertMessageOpen}
            severity="error"
            message="メールアドレスかパスワードが間違っています"
          />
        </div>
    )
}

export default SignForm