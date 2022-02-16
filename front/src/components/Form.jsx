import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { formStyle } from "./SignForm";

const Form = (props) => {
    const { handleChange, handleSubmit, value, buttonType } = props
    return (

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
            <TextField 
                sx={formStyle} 
                label="name" 
                type="text" 
                name="name" 
                id="name" 
                onChange={(e) => handleChange(e)} 
                value={value.name}
            />
            <TextField 
                multiline rows={4} 
                sx={formStyle} 
                label="content" 
                type="text" 
                name="content" 
                id="content" 
                onChange={(e) => handleChange(e)} 
                value={value.content} 
            />
            <Button 
                sx={{width: "50%", p: "1em"}} 
                variant="outlined" 
                type="subimit" 
                value={buttonType} 
                onClick={(e) => handleSubmit(e)}
            >
                create
            </Button>
        </Box>
        
    )
}

export default Form;