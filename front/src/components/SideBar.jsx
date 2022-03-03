import React from "react";
import { useNavigate } from 'react-router-dom';
//component
import { AuthButtons } from './index'
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Button, Icon, MenuItem, MenuList, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
//style
import { drawerWidth } from "../App";

const useStyles = makeStyles(() =>
    createStyles({
        maxSize: {
            height: "100%",
            width: "100%"
        },
    }),
);

export const  sideBarStyle = {
    menuItemHeight: {
        height: "5em"
    },
    iconMargin: {
        marginRight : "0.5em"
    },
    buttonBorderRadius: {
        borderRadius: "10em"
    }

}

const SideBar = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <Box
            sx={{ bgcolor: "#000000", height: "100%", position: "fixed", width: drawerWidth}}
        >
            <MenuList>
                <MenuItem sx={{ height: sideBarStyle.menuItemHeight }}>
                    <Typography className={classes.maxSize}>
                        <Button
                            onClick={()=> navigate('/')}
                            sx={{ color: "#ffffff", fontSize: "1.2em", display: "inline-block"}}
                            className={classes.maxSize}
                        >
                            <Icon sx={{mr: sideBarStyle.iconMargin}}>
                                <HomeIcon />
                            </Icon>
                            FOOTHUB
                        </Button>
                    </Typography>
                </MenuItem>
                <MenuItem sx={{ height: sideBarStyle.menuItemHeight }}>
                    <Typography
                        className={classes.maxSize}
                    >
                        <Button
                            onClick={()=> navigate('/new')}
                            sx={{ fontSize: "1em", borderRadius: sideBarStyle.buttonBorderRadius }}
                            variant="outlined"
                            className={classes.maxSize}
                        >
                            <CreateIcon sx={{mr: sideBarStyle.iconMargin}} />
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