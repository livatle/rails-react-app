import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { getDetail } from "../lib/api/post"; 

import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import { TableBody } from "@mui/material";

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
        <div className="c-grid">
            <button onClick={() => navigate('/')}>戻る</button>
            <TableContainer component={Paper} sx={{bgcolor: "#f5f5f5", mt: "2em"}}>
                <Table>
                    <TableBody>
                            <TableRow>
                                <TableCell align="center">
                                    {data.content}
                                </TableCell>
                                <TableCell align="center">
                                    <FavoriteButton />
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default Detail