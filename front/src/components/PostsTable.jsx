import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//context
import { AuthContext } from '../App';
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Icon, Table, TableBody, TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const useStyles = makeStyles(() =>
    createStyles({
        updateButton: {
            color: "#ff1988",
            textDecoration: "none",
            marginRight: "1em",
            marginBottom: "0.5em"
        },
        deleteButton: {
            color: "#ff1988",
            textDecoration: "none",
            paddingTop: "0.9em",
            paddingBottom: "0.9em"
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
                                >
                                    <p className="c-grid__item">{item.content}</p>
                                </NavLink>
                            </TableCell>
                            <TableCell sx={{width: "20%"}}>
                            {item.userId === currentUser?.id ? (
                                <>
                                    <Button>
                                        <NavLink 
                                            to={`/edit/${item.id}`}
                                            className={classes.updateButton}
                                        >
                                            <Icon>
                                                <EditIcon />
                                            </Icon>
                                            EDIT
                                        </NavLink>
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(item)}
                                        className={classes.deleteButton}
                                    >
                                        <DeleteIcon />
                                        DELETE
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