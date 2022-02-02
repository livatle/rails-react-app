import React from "react";
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
        <>
            <Box
            sx={{
                width: "80%",
                display: 'flex',
                flexDirection: 'column',
                mt: "2em",
                mr: "auto",
                ml: "auto"
            }}
            >
            {signType === 'signUp' && (
                <TextField sx={{width: "50%", mb: "2em" }} label="username" value={name} onChange={event => setName(event.target.value)} />
            )}
            <TextField sx={{width: "50%", mb: "2em" }} label="email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
            <TextField sx={{width: "50%", mb: "2em" }} label="password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
            {signType === 'signUp' && (
              <TextField
                sx={{width: "50%", mb: "2em" }}
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
            <Button sx={{width: "50%", p: "1em"}} variant="outlined" type="subimit" onClick={handleSubmit} >
                subimit
            </Button>
            {signType === 'signIn' && (
              <Box sx={{marginTop: "2em"}}>
                <Typography variant='body2'>
                  Don't have an account? &nbsp;
                  <Link to='/signup'>
                    Sign Up now!
                  </Link>
                </Typography>
              </Box>
            )}
        </Box>
        </>
    )
}

export default SignForm