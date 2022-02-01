import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SignForm = () => {
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
                <h1>SIGN UP</h1>
            <TextField sx={{width: "50%", mb: "2em" }} label="email" />
            <TextField sx={{width: "50%", mb: "2em" }} label="password" />
            <Button sx={{width: "50%", p: "1em"}} variant="outlined" type="subimit" >
                subimit
            </Button>
        </Box>
        </>
    )
}

export default SignForm