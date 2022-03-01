import React from "react";
import { useNavigate } from 'react-router-dom';
import { AuthButtons } from './index'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
        createStyles({
            drawer: {
                height: "100%",
                position: "fixed"
            },
            maxSize: {
                height: "100%",
                width: "100%"
            }
        }),
    );

const drawerWidth = 240;

const Header = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
             <Box
                className={classes.drawer}
                sx={{ width: drawerWidth, bgcolor: "#222A50"}}
            >
                 <MenuList>
                     <MenuItem>
                        <Typography className={classes.maxSize}>
                            <Button
                                onClick={()=> navigate('/')}
                                sx={{color: "white"}}
                                className={classes.maxSize}
                            >
                                FOOTHUB
                            </Button>
                        </Typography>
                     </MenuItem>
                    <MenuItem>
                        <Typography className={classes.maxSize}>
                        <Button
                            onClick={()=> navigate('/new')}
                            className={classes.maxSize}
                            sx={{color: 'white'}}
                        >
                            CREATE
                        </Button>
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Typography className={classes.maxSize}>
                            <AuthButtons />
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Box>
    )
}

export default Header