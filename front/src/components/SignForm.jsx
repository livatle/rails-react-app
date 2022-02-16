import React from "react";
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const formStyle = {
  '& div': {
    width: "50%"
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
    } = props;

    return (
      <Box
          sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              mt: "2em",
              mr: "auto",
              ml: "auto"
          }}
      >
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
            sx={{width: "50%"}}
            variant="outlined"
            type="subimit" 
            onClick={handleSubmit} 
          >
              subimit
          </Button>
          {signType === 'signIn' && (
            <Box sx={{mt: "2em", mr: "auto", ml: "auto"}}>
              <Typography variant='body2'>
                Don't have an account? &nbsp;
                <NavLink 
                  to='/signup'
                >
                  Sign Up now!
                </NavLink>
              </Typography>
            </Box>
          )}
        </Box>
    )
}

export default SignForm