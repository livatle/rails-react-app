import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles } from '@mui/styles';
import { getList, deletePost } from '../lib/api/post'
import { AuthContext } from '../App';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableBody } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles(() =>
    createStyles({
        tableRow: {
            borderRadius: "5px"
        },
        updateButton: {
            color: "#ff1988",
            textDecoration: "none",
            marginRight: "1em"
        },
        deleteButton: {
            color: "#ff1988",
            textDecoration: "none",
            paddingBottom: "0.5em"
        }
    }),
);


const PostsList = () => {
    const classes = useStyles();
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
        <Box 
            component="main"
            sx={{ ml: "240px", width: `calc(100% - ${drawerWidth}px)` }}
        >
            <TableContainer>
                <h2 className="p-text">All POSTS</h2>
                <Table>
                    <TableBody>
                        {dataList.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align={"center"}>
                                    <NavLink 
                                        to={`/users/${item.userId}`}
                                    >
                                        <p className="c-grid__item">{item.user}</p>
                                    </NavLink>
                                </TableCell>
                                <TableCell>
                                    <NavLink 
                                        to={`/post/${item.id}`}
                                        className={classes.button}
                                    >
                                        <p className="c-grid__item">{item.content}</p>
                                    </NavLink>
                                </TableCell>
                                <TableCell sx={{width: "15%"}}>
                                {item.user === currentUser.name  ? (
                                    <>
                                        <NavLink 
                                            to={`/edit/${item.id}`}
                                            className={classes.updateButton}
                                        >
                                            UPDATE
                                        </NavLink>
                                        <Button
                                            onClick={() => handleDelete(item)}
                                            className={classes.deleteButton}
                                        >
                                            Delete
                                        </Button>  
                                    </>
                                ) : (
                                    <></>
                                )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>           
            </TableContainer>
        </Box>
    )
}

export default PostsList