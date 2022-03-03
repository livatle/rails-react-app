import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// context
import { AuthContext } from '../App';
//material-ui
import { Button, Icon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { sideBarStyle } from "./SideBar";

const MyPostsButton = () => {
    const navigate = useNavigate();
    const { currentUser, isSignedIn } = useContext(AuthContext);
    
    return (
        <>
            <Button 
                onClick={()=> navigate(`/users/${currentUser.id}`)}
                sx={{
                    color: "#ffffff",
                    display: "inline-block",
                    fontSize: "1em",
                    height: sideBarStyle.maxSize.height,
                    width: sideBarStyle.maxSize.width,
                }}
            >
                {isSignedIn && currentUser ? (
                    <>
                        <p className="p-text">
                            <Icon sx={{ mr: "0.5em" }}>
                                <PersonIcon />
                            </Icon>
                            {currentUser?.name}
                        </p>
                    </>
                ) : (
                    <></>
                )}        
            </Button>
        </>
    )
}

export default MyPostsButton