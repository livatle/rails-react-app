import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// context
import { AuthContext } from '../App';

const MyPostsButton = () => {
    const navigate = useNavigate();
    const { currentUser, isSignedIn } = useContext(AuthContext);
    return (
        <>
            <Button 
                onClick={()=> navigate(`/users/${currentUser.id}`)}
                sx={{color: "white", display: "inline-block"}}
            >
                {isSignedIn && currentUser ? (
                    <>
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