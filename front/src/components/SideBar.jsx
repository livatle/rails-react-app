import React from "react";
import { useNavigate } from 'react-router-dom';
//component
import { AuthButtons } from './index'
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Button, MenuItem, MenuList, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';

const useStyles = makeStyles(() =>
    createStyles({
        sideBar: {
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

const SideBar = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <Box
            className={classes.sideBar}
            sx={{ width: drawerWidth, bgcolor: "black"}}
        >
            <MenuList>
                <MenuItem sx={{mt: "40px"}}>
                <Typography className={classes.maxSize}>
                    <Button
                        onClick={()=> navigate('/')}
                        sx={{color: "white", fontSize: "16px"}}
                        className={classes.maxSize}
                    >
                        <HomeIcon sx={{mr: "0.5em"}} />
                        FOOTHUB
                    </Button>
                </Typography>
                </MenuItem>
                <MenuItem sx={{ mt: "40px", height: "80px"}}>
                    <Typography 
                        sx={{ borderRadius: "10em" }}
                        className={classes.maxSize}
                    >
                        <Button
                            onClick={()=> navigate('/new')}
                            className={classes.maxSize}
                            variant="outlined"
                            sx={{ fontSize: "16px", borderRadius: "10em" }}
                        >
                            <CreateIcon sx={{mr: "0.5em"}} />
                            CREATE
                        </Button>
                    </Typography>
                </MenuItem>
                <AuthButtons/>
            </MenuList>
        </Box>
    )
}
export default SideBar