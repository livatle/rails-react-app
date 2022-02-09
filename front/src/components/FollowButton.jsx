import React, { useState } from "react";
import Button from '@mui/material/Button';


const FollowButton = () => {
    const [followButton, setFollowButton] = useState({
        value: "フォロー",
        toggle: false
    })
    const handleClickFollowButton = () => {
        if (followButton.toggle === false) {
            setFollowButton({
                value: "フォロー中",
                toggle: true
            })
        } else {
            setFollowButton({
                value: "フォローする",
                toggle: false
            })
        }
        
    };
    return (
        <>
                <Button
                    onClick={() => handleClickFollowButton()}
                    sx={{color: "white", display: "inline-block", ml: "2em"}}
                    variant='contained'
                    color='primary'
                >
                    {followButton.value}
                </Button>
        </>
    )

}

export default FollowButton