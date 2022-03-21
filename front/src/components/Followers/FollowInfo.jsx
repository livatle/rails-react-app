import React, { useContext, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
//api
import { checkFollowing } from '../../lib/api/user'
import { follow, unfollow } from '../../lib/api/relationship'
//context
import { AuthContext } from '../../App';
//material-ui
import{ Button } from '@mui/material';

const buttonStyle = {
    color: "primary",
    display: "inline-block",
    minWidth: "13em",
    pt: "1em",
    pb: "1em",
    pr: "2em",
    pl: "2em"
}
const FollowInfo = (props) => {
    const { username } = props
    const [isFollowing, setIsFollowing] = useState('')
    const query = useParams();
    const { currentUser } = useContext(AuthContext)
    
    //ユーザーフォローを実行する関数
    const handleClickFollowButton =  async ()  => {
        //フォロー中でなかった場合
        if (isFollowing === false) {
            try {
                //apiへリクエスト
                const res = await follow(query);
                console.log(res.data)
                setIsFollowing(true)
            } catch (e) {
            console.log(e);
            }
        } else {
            try {
                //apiへリクエスト
                const res = await unfollow(query.id);
                console.log(res.data)
                setIsFollowing(false)
            } catch (e) {
            console.log(e);
            }
        }
    }

    //フォロー中のユーザーか判定するメソッド
    const handleCheckFollowing = async (query) => {
        try {
          //apiへリクエスト
          const res = await checkFollowing(query.id);
          //フォローしているかの真偽値をセット
          setIsFollowing(res.data.isFollowing);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleCheckFollowing(query);
    }, [query])

    const FollowButton = () => {
        //マイページにはフォローボタンを表示しない
        if (username === currentUser?.name) {
            return (
                <></>
            );
        } else {
            return(
                <li className="c-button--right">
                    <Button
                        onClick={()=> handleClickFollowButton()}
                        sx={{ color: "secondary", display: "inline-block", minWidth: "10em", pt: "1em", pb: "1em", pr: "2em", pl: "2em" }}
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
                        sx={buttonStyle}
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
                        sx={buttonStyle}
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
                        sx={buttonStyle}
                    >
                        FAVORITE POSTS
                    </Button> 
                </NavLink>
            </li>
            <FollowButton />
        </ul>
    )
}

export default FollowInfo