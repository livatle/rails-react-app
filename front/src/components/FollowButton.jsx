import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';

import { getFollowingsList } from '../lib/api/user'
import { follow, unfollow } from '../lib/api/relationship'


const FollowButton = () => {
    const query = useParams();
    const [isFollowing, setIsFollowing] = useState({
        value: 'フォローする',
        toggle: false
    })
    const [followingsList, setFollowingsList] = useState('')
    const [followData, setFollowData] = useState([]);
    const handleClickFollowButton = async () => {
        if (isFollowing.toggle === false) {
            try {
                const res = await follow(query);
                console.log(res.data)
                setFollowData(res.data)
                setIsFollowing({
                    value: 'フォロー中',
                    toggle: true
                })
            } catch (e) {
            console.log(e);
            }
        } else {
            try {
                const res = await unfollow(followData.id);
                console.log(res.data)
                setIsFollowing({
                    value: 'フォローする',
                    toggle: false
                })
            } catch (e) {
            console.log(e);
            }
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