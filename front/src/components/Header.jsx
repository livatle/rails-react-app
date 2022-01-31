import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar sx={{bgcolor: "black"}} position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2 }}
                    >
                        <Button 
                            onClick={()=> navigate('/')}
                            sx={{color: "white"}}
                        >
                            FOOTHUB
                        </Button>
                    </Typography>
                    <Box sx={{ml: "auto"}}>
                        <Button 
                            onClick={()=> loginWithRedirect()}
                            sx={{color: "white", display: "inline-block"}}
                        >
                            LOGIN
                        </Button>

                        <Button
                            onClick={() => {
                                logout({ returnTo: window.location.origin });
                            }}
                            sx={{color: "white", display: "inline-block"}}
                        >
                            LOGOUT
                        </Button>

                        <Button
                            onClick={()=> navigate('/new')}
                            sx={{color: 'white', display: "inline-block"}}
                        >
                            CREATE
                        </Button>
                    </Box>
                        
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header