import React, { useEffect, useState } from "react";
//component
import { PostsTable } from './index'
import { Home } from '../Home/index'
//api
import { getList, deletePost } from '../../lib/api/post'
//material-ui
import { Divider } from '@mui/material';

const PostsList = () => {
    const [dataList, setDataList] = useState();

    const handleGetList = async () => {
        try {
          const res = await getList();
          console.log(res.data);
          setDataList(res.data);
        } catch (e) {
          console.log(e);
        }
    };

    useEffect(() => {
        handleGetList();
    }, []);

    // 削除する関数を追加
    const handleDelete = async (item) => {
        // 引数にitemを渡してitem.idで「1」など取得できればOK
        console.log('click', item.id)
        try {
            const res = await deletePost(item.id)
            console.log(res.data)
        // データを再取得
        handleGetList()
        } catch (e) {
            console.log(e)
        }
    }

    const Title = () => {
        if (dataList.length >= 1) {
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
                dataList={dataList}
                handleDelete={handleDelete}
                username={dataList.user}
            />
        </>
    )
}

export default PostsList