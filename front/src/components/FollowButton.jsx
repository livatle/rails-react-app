import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

import { getFollowingsList } from '../lib/api/user'


const FollowButton = () => {
    const [followingsList, setFollowingsList] = useState('')

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
                sx={{color: "white", display: "inline-block", ml: "2em"}}
                variant='contained'
                color='primary'
            >
                フォロー
            </Button>
        </>
    )

}

export default FollowButton