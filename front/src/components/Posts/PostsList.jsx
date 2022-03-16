import React, { useEffect, useState } from "react";
//component
import { PostsTable } from './index'
import { Home } from '../Home/index'
//api
import { getList, deletePost } from '../../lib/api/post'
//material-ui
import { Divider } from '@mui/material';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    const handleGetList = async () => {
        try {
          const res = await getList();
          const postsList = JSON.parse(res.data);
          console.log(postsList);
          setPosts(postsList);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleGetList();
    }, []);

    // 削除する関数を追加
    const handleDelete = async (post) => {
        // 引数にitemを渡してitem.idで「1」など取得できればOK
        console.log('click', post.id)
        try {
            const res = await deletePost(post.id)
            console.log(res.data)
        // データを再取得
        handleGetList()
        } catch (e) {
            console.log(e)
        }
    }

    const Title = () => {
        if (posts.length >= 1) {
            return (
                <>
                    <h2 className="c-text">ALL POST</h2>
                    <Divider color="#ffffff" />
                </>
            )
        } else {
            return (
                <Home />
            )
        }
    }
    return (
        <>
            <Title />
            <PostsTable
                posts={posts}
                handleDelete={handleDelete}
                username={posts.user}
            />
        </>
    )
}

export default PostsList