import React from "react";
import { NavLink } from "react-router-dom"

import { createStyles, makeStyles } from '@mui/styles';

import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import { TableBody } from "@mui/material";

const useStyles = makeStyles(() =>
        createStyles({
            userButton: {
                textDecoration: "none"
            },
            moreButton: {
                textDecoration: "none"
            },
            updateButton : {
                textDecoration: "none"
            },
        }),
    );

const PostsTable = (props) => {
    const { dataList, handleDelete } = props;
    const classes = useStyles();
    return (
        <TableContainer component={Paper} sx={{bgcolor: "#f5f5f5", mt: "2em"}}>
            <Table>
                <TableBody>
                    {dataList.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >   <TableCell align="center">
                            <NavLink 
                                to={`/users/${item.userId}`}
                                className={classes.userButton}
                            >
                                {item.user}
                            </NavLink>
                            </TableCell>
                            <TableCell align="center">
                                {item.content}
                            </TableCell>
    
                            <TableCell align="right">
                                <Button variant="outlined">
                                    <NavLink 
                                        to={`/post/${item.id}`}
                                        className={classes.moreButton}
                                    >
                                        more
                                    </NavLink>
                                </Button>
                                <Button variant="outlined">
                                    <NavLink 
                                        to={`/edit/${item.id}`}
                                        className={classes.updateButton}
                                    >
                                        update
                                    </NavLink>
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