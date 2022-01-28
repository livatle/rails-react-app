import React from "react";
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { bgcolor } from "@mui/system";

const Header = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <AppBar sx={{bgcolor: "black"}} position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        FOOTHUB
                    </Typography>
                        <Button 
                            sx={{color: "white"}}
                        >
                            LOGIN
                        </Button>
                    
                    
                        <Button
                            onClick={()=> navigate('/new')}
                            sx={{ my: 2, color: 'white'}}
                        >
                            CREATE
                        </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header