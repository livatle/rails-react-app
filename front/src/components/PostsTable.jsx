import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//context
import { AuthContext } from '../App';
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material';


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

const PostsTable = (props) => {
    const { dataList, handleDelete, username } = props
    const { currentUser } = useContext(AuthContext)
    const classes = useStyles();

    return (
        <>
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
                                    <p className="c-grid__item">{username}</p>
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
                            {item.userId === currentUser?.id ? (
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
        </>                
    )
}

export default PostsTable