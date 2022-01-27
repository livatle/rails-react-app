import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { getList, deletePost } from '../lib/api/post'

const List = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        handleGetList();
    }, []);

    const handleGetList = async () => {
        try {
          const res = await getList();
          console.log(res.data);
          setDataList(res.data);
        } catch (e) {
          console.log(e);
        }
    };

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
        <div className="list">
            <table className="table">
                {dataList.map((item, index) => (
                    <div className="post">
                        <thead>
                            <tr>
                                <th>名前</th>
                                <th>内容</th>
                            </tr>
                        </thead>
                        <tbody key={index}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.content}</td>
                                <td>
                                    <Link to={`/edit/${item.id}`}>更新</Link>
                                </td>
                                <td>
                                    <Link to={`/post/${item.id}`}>詳細へ</Link>
                                </td>
                                <td>
                                <button onClick={() => handleDelete(item)}>削除</button>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                ))}
            </table>
        </div>
    )
}

export default List