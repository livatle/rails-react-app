import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';

import { formStyle } from "./SignForm";

const Form = (props) => {
    const { handleChange, handleSubmit, value, buttonType } = props
    return (
        <>
            <div className="post-box">
            {buttonType === 'create' ? (
            <h2 className="c-text">
                NEW POST
            </h2>) : (
            <h2 className="c-text">
                UPDATE
            </h2>
            ) 
            }
            <TextField 
                multiline rows={4} 
                sx={formStyle} 
                type="text" 
                name="content" 
                id="content" 
                onChange={(e) => handleChange(e)} 
                value={value.content} 
            />
            <Button 
                sx={{width: "80%", p: "1em", borderRadius: "10em"}} 
                variant="outlined" 
                type="subimit" 
                value={buttonType} 
                onClick={(e) => handleSubmit(e)}
            >
                <CreateIcon sx={{mr: "0.5em"}} />
                {buttonType === 'create' ? (
                    "create"
                ) : (
                    "update"
                ) 
                }
            </Button>
            </div>
        </>
    )
}

export default Form;