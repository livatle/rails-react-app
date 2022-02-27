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
                paddingBottom: "10px"
            }
        }),
    );

const PostsTable = (props) => {
    const { dataList, handleDelete } = props;
    const classes = useStyles();
    return (
        <TableContainer 
            component={Paper} 
            sx={{bgcolor: "#222A50", mt: "2em"}}
        >
            <Table>
                <TableBody>
                    {dataList.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        > 
                            <TableCell align="center" sx={{width: "20%"}}>
                                <NavLink 
                                    to={`/users/${item.userId}`}
                                >
                                    <p className="c-grid__item">{item.user}</p>
                                </NavLink>
                            </TableCell>
                            <TableCell align="center"sx={{width: "60%"}}>
                                <NavLink 
                                    to={`/post/${item.id}`}
                                    className={classes.button}
                                >
                                    <p className="c-grid__item">{item.content}</p>
                                </NavLink>
                            </TableCell>
                            <TableCell align="center" sx={{width: "20%"}}>
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
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>           
        </TableContainer>
    )
}

export default PostsTable