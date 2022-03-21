import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
// api
import { getUserPosts } from '../../lib/api/user';
import { deletePost } from '../../lib/api/post'
//material-ui
import { Divider } from "@mui/material";
//component
import { PostsTable } from '../Posts/index'
import { FollowInfo } from '../Followers/index'

const UserPosts = () => {
  const [user, setUser] = useState('')
  const [dataUser, setDataUser] = useState([]);
  const query = useParams();

  //ユーザーの投稿を取得する関数
  const handleGetUserPosts = async () => {
    try {
      //apiへリクエスト
      const res = await getUserPosts(query.id);
      console.log(res.data);
      //ユーザーの投稿をセット
      setDataUser(res.data.posts);
      //ユーザーの情報をセット
      setUser(res.data.user);
    } catch (e) {
        console.log(e)
    }
  };

  useEffect(() => {
      handleGetUserPosts(query);
  }, [query]);
  
  //ユーザーの投稿を削除する関数
  const handleDelete = async (item) => {
    try {
      //apiへリクエスト
      const res = await deletePost(item.id)
      console.log(res.data)
      //ユーザーの投稿一覧を再取得
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
        <FollowInfo username={user.name} />
        <UserTable />
      </>
  )
}

export default UserPosts