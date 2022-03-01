import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

import { follow, unfollow } from '../lib/api/relationship'
import { checkFollowing } from '../lib/api/user'

const FollowInfo = () => {
    const query = useParams();
    const [isFollowing, setIsFollowing] = useState('')
    const handleClickFollowButton =  async ()  => {
        if (isFollowing === false) {
            try {
                const res = await follow(query);
                console.log(res.data)
                setIsFollowing(true)
            } catch (e) {
            console.log(e);
            }
        } else {
            try {
                const res = await unfollow(query.id);
                console.log(res.data)
                setIsFollowing(false)
            } catch (e) {
            console.log(e);
            }
        }
    }

    const handleCheckFollowing = async (query) => {
        try {
          const res = await checkFollowing(query.id);
          console.log(res.data.isFollowing);
          setIsFollowing(res.data.isFollowing);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleCheckFollowing(query);
    }, [query])
    return (
<ul className="p-section__follow-info">  
            <li>
                <NavLink 
                    to={`/users/${query.id}/following`}
                    className='p-section--left'
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
                    {isFollowing ? (
                        'フォロー中'
                    ) : (
                        'フォローする'
                    )}
                </Button>
            </li>
        </ul>
    )

}

export default FollowInfo