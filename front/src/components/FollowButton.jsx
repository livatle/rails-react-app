import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

import { createStyles, makeStyles } from '@mui/styles';

import { follow, unfollow } from '../lib/api/relationship'

const useStyles = makeStyles(() =>
        createStyles({
            followInfo: {
                textDecoration: "none",
                marginRight: "1em",
                color: "#ff1988"
            }
        }),
    );

const FollowButton = () => {
    const query = useParams();
    const classes = useStyles();
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
        <ul className="follow-box">  
            <li className="follow-info">
                <NavLink 
                    to={`/users/${query.id}/following`}
                    className={classes.followInfo}
                >
                    {isFollowing.value}
                </NavLink>
            </li>
            <li className="follow-info">
                <NavLink 
                    to={`/users/${query.id}/follower`}
                    className={classes.followInfo}
                >
                    フォロワー
                </NavLink>
            </li>
            <li className="follow-button">
                <Button
                    onClick={()=> handleClickFollowButton()}
                    sx={{color: "secondary", display: "inline-block", ml: "2em"}}
                    color="secondary"
                    variant="outlined"
                >
                    {isFollowing.value}
                </Button>
            </li>
        </ul>
    )

}

export default FollowButton