import React from "react";
import { useNavigate } from 'react-router-dom';
//component
import { AuthButtons } from './index'
//material-ui
import { Box, Button, Icon, MenuItem, MenuList, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
//style
import { drawerWidth } from "../App";

export const sideBarStyle = {
    menuItemHeight: {
        height: "5em"
    },
    iconMargin: {
        marginRight : "0.5em"
    },
    buttonBorderRadius: {
        borderRadius: "10em"
    },
    maxSize: {
        height: "100%",
    }
}

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{ bgcolor: "#000000", height: sideBarStyle.maxSize, position: "fixed", width: drawerWidth}}
        >
            <MenuList>
                <MenuItem sx={{ height: sideBarStyle.menuItemHeight }}>
                    <Typography 
                        className="c-box"
                    >
                        <Button
                            onClick={()=> navigate('/')}
                            className="c-box"
                            sx={{ 
                                color: "#ffffff",
                                display: "inline-block",
                                fontSize: "1.2em",
                            }}
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
                        className="c-box"
                    >
                        <Button
                            onClick={()=> navigate('/new')}
                            className="c-box"
                            sx={{ 
                                borderRadius: sideBarStyle.buttonBorderRadius,
                                display: "inline-block",
                                fontSize: "1em",
                            }}
                            variant="outlined"
                        >
                            <Icon sx={{mr: sideBarStyle.iconMargin}}>
                                <CreateIcon />
                            </Icon>
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