import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';

import { getFollowingsList } from '../lib/api/user'
import { follow } from '../lib/api/relationship'


const FollowButton = () => {
    const query = useParams();
    const user_id = query
    const [isFollowing, setIsFollowing] = useState({
        value: 'フォローする',
        toggle: false
    })
    const [followingsList, setFollowingsList] = useState('')
    const handleClickFollowButton = async () => {
        try {
            const res = await follow(user_id);
            console.log(res)
          } catch (e) {
            console.log(e);
          }
    }
    const handleGetFollowingsList = async () => {
        try {
            const res = await getFollowingsList();
            console.log(res.data);
            setFollowingsList(res.data);
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        handleGetFollowingsList();
    }, []);

    return (
        <>
            <div>
                <p><span>{followingsList}</span></p>
                <p><span></span></p>
            </div>
            <Button
                onClick={()=> handleClickFollowButton()}
                sx={{color: "white", display: "inline-block", ml: "2em"}}
                variant='contained'
                color='primary'
            >
                {isFollowing.value}
            </Button>
        </>
    )

}

export default FollowButton