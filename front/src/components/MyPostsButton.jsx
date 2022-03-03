import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// context
import { AuthContext } from '../App';
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Icon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles(() =>
        createStyles({
            maxSize: {
                height: "100%",
                width: "100%"
            }
        }),
    );

const MyPostsButton = () => {
    const navigate = useNavigate();
    const { currentUser, isSignedIn } = useContext(AuthContext);
    const classes = useStyles();
    
    return (
        <>
            <Button 
                onClick={()=> navigate(`/users/${currentUser.id}`)}
                className={classes.maxSize}
                sx={{color: "white", fontSize: "16px", display: "inline-block"}}
            >
                {isSignedIn && currentUser ? (
                    <>
                        <Icon>
                            <PersonIcon />
                        </Icon>
                        {currentUser?.name}
                    </>
                ) : (
                    <></>
                )}        
            </Button>
        </>
    )
}

export default MyPostsButton