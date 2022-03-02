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
                        sx={{ pt: "1em", pb: "1em", pr: "2em", pl: "2em", color: "secondary", minWidth: "140px", display: "inline-block", borderRadius: "10em" }}
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
            <li className='p-section--left'>
                <NavLink 
                    to={`/users/${query.id}/following`}
                >
                    <Button 
                        variant="outlined"
                        sx={{ pt: "1em", pb: "1em", pr: "2em", pl: "2em", color: "secondary", display: "inline-block" }}
                    >
                        FOLLOWINGS
                    </Button>
                </NavLink>
            </li>
            <li className='p-section--left'>
                <NavLink 
                    to={`/users/${query.id}/follower`}
                >
                    <Button 
                        variant="outlined"
                        sx={{ pt: "1em", pb: "1em", pr: "2em", pl: "2em", color: "secondary", display: "inline-block" }}
                    >
                        FOLLOWERS
                    </Button> 
                </NavLink>
            </li>
            <li className='p-section--left'>
                <NavLink 
                    to={`/users/${query.id}/favorite_posts`}
                >
                    <Button 
                        variant="outlined"
                        sx={{ pt: "1em", pb: "1em", pr: "2em", pl: "2em", color: "secondary", display: "inline-block" }}
                    >
                        FAVORITE
                    </Button> 
                </NavLink>
            </li>
            <FollowButton />
        </ul>
    )
}

export default FollowInfo