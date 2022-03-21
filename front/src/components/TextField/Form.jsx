import React from "react";
//material-ui
import { Button, TextField } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
//component
import { AlertMessage } from '../Notification/index'
//style
import { formStyle } from "./SignForm";

export const submitButtonStyle = {
    borderRadius: "10em",
    width: "80%",
    p: "1em"
}

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
            <div className="p-box">
                {buttonType === 'create' ? (
                    <h2 className="p-text">
                        CREATE
                    </h2>
                ) : (
                    <h2 className="p-text">
                        EDIT
                    </h2>
                )}
                <TextField 
                    sx={formStyle} 
                    multiline rows={4} 
                    id="content" 
                    name="content" 
                    type="text" 
                    onChange={(e) => handleChange(e)} 
                    value={value.content} 
                />
                <Button 
                    onClick={(e) => handleSubmit(e)}
                    sx={submitButtonStyle} 
                    variant="outlined" 
                    type="subimit" 
                    value={buttonType} 
                >
                    <CreateIcon sx={{mr: "0.5em"}} />
                    {buttonType === 'create' ? (
                        "CREATE"
                    ) : (
                        "EDIT"
                    )}
                </Button>
                <AlertMessage
                    open={alertMessageOpen}
                    setOpen={setAlertMessageOpen}
                    severity="error"
                    message="failed to create"
                />
            </div>
        </>
    )
}

export default Form;