import React, { useContext, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from '../App';
import Button from '@mui/material/Button';

import { follow, unfollow } from '../lib/api/relationship'
import { checkFollowing } from '../lib/api/user'

const FollowInfo = (props) => {
    const { user } = props
    const query = useParams();
    const { currentUser } = useContext(AuthContext)
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

    const FollowButton = () => {
        if (user === currentUser?.name) {
            return (
                <></>
            );
        } else {
            return(
                <li className="c-button--right">
                    <Button
                        onClick={()=> handleClickFollowButton()}
                        sx={{ pt: "1em", pb: "1em", pr: "2em", pl: "2em", color: "secondary", minWidth: "140px", display: "inline-block" }}
                        variant={isFollowing ? (
                            "contained"
                        ) : (
                            'outlined'
                        )}
                    >
                        {isFollowing ? (
                            'Following'
                        ) : (
                            'Follow'
                        )}
                    </Button>
                </li>
            ) 
        }
    }

    return (
        <ul className="p-section__follow-info">  
            <li>
                <NavLink 
                    to={`/users/${query.id}/following`}
                    className='p-section--left'
                >
                    Followings
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={`/users/${query.id}/follower`}
                    className='p-section--left'
                >
                    Followers
                </NavLink>
            </li>
            <FollowButton />
        </ul>
    )
}

export default FollowInfo