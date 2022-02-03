import React, {useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom"
import { getList, deletePost } from '../lib/api/post'

import { AuthContext } from "../App"

import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import { TableBody } from "@mui/material";

const List = () => {
    const [dataList, setDataList] = useState([]);
    const { isSignedIn, currentUser } = useContext(AuthContext)


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
            {isSignedIn && currentUser ? (
                <>
                    <h2>名前: {currentUser?.name}</h2>
                    <h2>メールアドレス: {currentUser?.email}</h2>
                </>
                ) : (
                <></>
                )
            }
            <TableContainer component={Paper} sx={{bgcolor: "#f5f5f5", mt: "2em"}}>
                <Table>
                    <TableBody>
                        {dataList.map((item, index) => (
                                <TableRow
                                    key={item}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="center">{item.content}</TableCell>
            
                                    <TableCell align="right">
                                        <Button variant="outlined">
                                            <Link to={`/post/${item.id}`}>more</Link>
                                        </Button>
                                        <Button variant="outlined">
                                            <Link to={`/edit/${item.id}`}>update</Link>
                                        </Button>                                    
                                        <Button onClick={() => handleDelete(item)} variant="outlined">
                                            Delete
                                        </Button>    
                                    </TableCell> 
                    
                                </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </TableContainer>
        </div>
    )
}

export default List