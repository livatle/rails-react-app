import React, {useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom"
import { PostsTable } from './index'
import { getList, deletePost } from '../lib/api/post'
// context
import { AuthContext } from '../App';

const PostsList = () => {
    const { loading, isSignedIn, setIsSignedIn, currentUser } = useContext(AuthContext);
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
        <div className="c-grid">
            <PostsTable
                dataList={dataList}
                handleDelete={handleDelete}
                currentUser={currentUser}
            />
        </div>
    )
}

export default PostsList