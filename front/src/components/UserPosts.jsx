import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
// api
import { getUserPosts } from '../lib/api/user';
import { deletePost } from '../lib/api/post';

import { PostsTable } from './index'

import { Button } from '@mui/material';

const UserPosts = () => {
    const [dataUser, setDataUser] = useState([]);
    const query = useParams();
    const navigate = useNavigate();

    const handleGetUserPosts = async () => {
        try {
          const res = await getUserPosts(query.id);
          console.log(res.data);
          setDataUser(res.data);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleGetUserPosts(query);
    }, [query]);
    
    const handleDelete = async (item) => {
        console.log('click', item.id)
        try {
        const res = await deletePost(item.id)
        console.log(res.data)
        // データを再取得
        handleGetUserPosts()
        } catch (e) {
            console.log(e)
        }   
    }
        const UserTable = () => {
            if (dataUser.length >= 1) {
              return (
                <div className="c-grid">
                  <PostsTable
                    dataList={dataUser}
                    handleDelete={handleDelete}
                  />
                </div>
              );
            } else {
              return (
                <h2>No Post</h2>
              );
            }
        };
    return (
        <div className="c-grid">
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