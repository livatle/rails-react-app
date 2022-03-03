import React from "react";
import { Alert, Snackbar } from '@mui/material';

const AlertMessage = (props) => {
    const { open, setOpen ,severity ,message } = props

    const handleCloseAlertMessage = () => {
        return setOpen(false)
    }
    
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            onClose={handleCloseAlertMessage}
        >
            <Alert onClose={handleCloseAlertMessage} severity={severity}>
                {message}
            </Alert>
        </Snackbar>    
    )
}

export default AlertMessage