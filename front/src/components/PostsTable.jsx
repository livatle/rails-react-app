import React from "react";
import {Link} from "react-router-dom"


import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import { TableBody } from "@mui/material";

const PostsTable = (props) => {
    const { dataList, handleDelete } = props;
    return (
            <TableContainer component={Paper} sx={{bgcolor: "#f5f5f5", mt: "2em"}}>
                <Table>
                    <TableBody>
                        {dataList.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >   <TableCell align="center">
                                <Link to={`/users/${item.userId}`}>
                                    {item.user}
                                </Link>
                                </TableCell>
                                <TableCell align="center">
                                    {item.content}
                                </TableCell>
        
                                <TableCell align="right">
                                    <Button variant="outlined">
                                        <Link to={`/post/${item.id}`}>
                                            more
                                        </Link>
                                    </Button>
                                    <Button variant="outlined">
                                        <Link to={`/edit/${item.id}`}>
                                            update
                                        </Link>
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
    )
}

export default PostsTable