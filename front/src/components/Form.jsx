import React from "react";
//material-ui
import { Button, TextField } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
//component
import { AlertMessage } from './index'
import { formStyle } from "./SignForm";

const Form = (props) => {
    const { 
        handleChange,
        handleSubmit,
        value,
        buttonType,
        alertMessageOpen,
        setAlertMessageOpen
    } = props
    
    return (
        <>
            <div className="post-box">
            {buttonType === 'create' ? (
                <h2 className="c-text">
                    CREATE
                </h2>
            ) : (
                <h2 className="c-text">
                    UPDATE
                </h2>
            )}
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
                )}
            </Button>
            <AlertMessage
                open={alertMessageOpen}
                setOpen={setAlertMessageOpen}
                severity="error"
                message="please fill in the blank"
            />
            </div>
        </>
    )
}

export default Form;