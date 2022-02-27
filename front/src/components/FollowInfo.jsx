import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

import { follow, unfollow } from '../lib/api/relationship'

const FollowInfo = () => {
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
    return (
        <ul className="p-section__follow-info">  
            <li>
                <NavLink 
                    to={`/users/${query.id}/following`}
                    className='p-section__left'
                >
                    フォロー中
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={`/users/${query.id}/follower`}
                    className='p-section--left'
                >
                    フォロワー
                </NavLink>
            </li>
            <li className="c-button--right">
                <Button
                    onClick={()=> handleClickFollowButton()}
                    sx={{color: "secondary", display: "inline-block", ml: "2em"}}
                    variant="outlined"
                >
                    {isFollowing.value}
                </Button>
            </li>
        </ul>
    )

}

export default FollowInfo