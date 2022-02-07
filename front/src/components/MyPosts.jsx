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

const MyPosts = () => {
    const { loading, isSignedIn, currentUser } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        handleGetUserPosts();
    }, [currentUser]);

    const handleGetUserPosts = async () => {
        if (!loading) {
            if (isSignedIn) {
                const res = await getUserPosts(currentUser.id);
                console.log(res.data);
                setMyPosts(res.data);
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
        if (myPosts.length >= 1) {
          return (
            <PostsTable
              dataList={myPosts}
              handleDelete={handleDelete}
              currentUser={currentUser}
            />
          );
        } else {
          return <h2>No Post</h2>;
        }
    };
    return (
        <div className="c-grid">
            <h1>{currentUser.name}'s POST</h1>
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

export default MyPosts