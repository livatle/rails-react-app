import React, { useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
// style
import { Button } from '@mui/material';
// api
import { getUserPosts } from '../lib/api/user';
import { deletePost } from '../lib/api/post';
// context
import { AuthContext } from '../App';
// component
import { PostsTable } from './index';

const UserPosts = () => {
    const { loading, isSignedIn, currentUser } = useContext(AuthContext);
    const [userPosts, setUserPosts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        handleGetUserPosts();
      }, [currentUser]);

    const handleGetUserPosts = async () => {
        if (!loading) {
            if (isSignedIn) {
                const res = await getUserPosts(currentUser.id);
                console.log(res.data);
                setUserPosts(res.data);
            } else {
                <Navigate to='/signin' />;
            }
        } 
    };
    const handleDelete = async (item) => {
        console.log('click', item.id);
        try {
          const res = await deletePost(item.id);
          console.log(res.data);
          handleGetUserPosts();
        } catch (e) {
          console.log(e);
        }
    };
    const UserTable = () => {
        if (userPosts.length >= 1) {
          return (
            <PostsTable
              dataList={userPosts}
              handleDelete={handleDelete}
              currentUser={currentUser}
            />
          );
        } else {
          return <h2>投稿はありません。</h2>;
        }
    };
    return (
        <div className="c-grid">
            <h1>{currentUser.name}の投稿一覧</h1>
            <Button
                variant='contained'
                color='primary'
                onClick={() => navigate('/')}
            >
                戻る
            </Button>
            <UserTable />
        </div>
    )
}

export default UserPosts