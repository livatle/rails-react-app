import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { getDetail } from "../lib/api/post"; 

import { FavoriteButton } from './index'

const Detail = () => {

    const [data, setData] = useState({});
    // { id: "1" }を取得する
    const query = useParams();
    // 戻るボタン用
    const navigate = useNavigate();
    
    // 画面描画時にidがundefinedだとデータ取得できないので
    // 依存配列にidを入れて、idがundifined => 1と更新された時に
    // useEffectの副作用を使い、処理をもう一度実行させる
    useEffect(() => {
        handleGetDetail(query);
    }, [query]);

    const handleGetDetail = async (query) => {
        try {
        const res = await getDetail(query.id);
        console.log(res.data);
        setData(res.data);
        } catch (e) {
        console.log(e);
        }
    };

    return (
        <div className="c_grid">
            <h1>DETAIL</h1>
            <div>ID: {data.id}</div>
            <div>名前: {data.name}</div>
            <div>内容: {data.content}</div>
            <FavoriteButton />
            <button onClick={() => navigate('/')}>戻る</button>
        </div>
    )
}
export default Detail