import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
// api
import { getUserPosts } from '../lib/api/user';
import { deletePost } from '../lib/api/post'
//material-ui
import { Divider } from "@mui/material";
//component
import { FollowInfo, PostsTable } from './index'

const UserPosts = () => {
  const [user, setUser] = useState('')
  const [dataUser, setDataUser] = useState([]);
  const query = useParams();

  const handleGetUserPosts = async () => {
    try {
      const res = await getUserPosts(query.id);
      console.log(res.data);
      setDataUser(res.data.posts);
      setUser(res.data.user);
    } catch (e) {
        console.log(e)
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
            <PostsTable
                dataList={dataUser}
                handleDelete={handleDelete}
                username={user.name}
                user={user.name}
            />
        );
      } else {
        return (
            <h2 className="c-text">NO POST</h2>
        );
      }
  };
  return (
      <>
        <h2 className="c-text">{user.name}</h2>
        <Divider color="#ffffff" />
        <FollowInfo user={user.name} />
        <UserTable />
      </>
  )
}

export default UserPosts