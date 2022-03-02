import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { createStyles, makeStyles } from '@mui/styles';
// context
import { AuthContext } from '../App';

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
    const classes = useStyles();
    const { currentUser, isSignedIn } = useContext(AuthContext);
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
                )
                }        
            </Button>
        </>
    )
}

export default MyPostsButton