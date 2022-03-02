import React, { useContext, useEffect, useState } from "react";
import { PostsTable } from './index'
import { getList, deletePost } from '../lib/api/post'
import { AuthContext } from '../App';

const PostsList = () => {
    const { currentUser } = useContext(AuthContext)
    const [dataList, setDataList] = useState([]);

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

    return (
        <>
            <h2 className="p-text">All POST</h2>
            <PostsTable
                currentUser={currentUser}
                dataList={dataList}
                handleDelete={handleDelete}
                username={dataList.user}
            />
        </>
    )
}

export default PostsList