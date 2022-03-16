import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//context
import { AuthContext } from '../../App';
//material-ui
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Icon, Table, TableBody, TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(() =>
    createStyles({
       button: {
           color: "#1876D1",
           textDecoration: "none",
       }
    }),
);

const buttonStyle = {
    updateButton: {
        pr: "1em",
        pl: "1em",
        marginRight: "1em",
        marginBottom: "0.5em"
    },
    deleteButton: {
        paddingTop: "0.5em",
        paddingBottom: "0.5em"
    }
}

const PostsTable = (props) => {
    const { posts, handleDelete, username } = props
    const { currentUser } = useContext(AuthContext)
    const classes =  useStyles();

    return (
        <Table>
            <TableBody>
                {posts.map((post) =>
                    <TableRow
                        key={post.id}
                        sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align={"center"}>
                            <NavLink 
                                to={`/users/${post.userId}`}
                            >   
                                <p className="c-grid__item">{post.user}</p>
                                <p className="c-grid__item">{username}</p>
                            </NavLink>
                        </TableCell>
                        <TableCell>
                            <NavLink 
                                to={`/post/${post.id}`}
                            >
                                <p className="c-grid__item">{post.content}</p>
                            </NavLink>
                        </TableCell>
                        <TableCell sx={{width: "20%"}}>
                        {post.userId === currentUser?.id ? 
                            <>
                                <Button sx={buttonStyle.updateButton}>
                                    <NavLink 
                                        to={`/edit/${post.id}`}
                                        className={classes.button}
                                    >
                                        <Icon>
                                            <EditIcon />
                                        </Icon>
                                        EDIT
                                    </NavLink>
                                </Button>
                                <Button
                                    onClick={() => handleDelete(post)}
                                    className={classes.button}
                                    sx={buttonStyle.deleteButton}
                                >
                                    <DeleteIcon />
                                    DELETE
                                </Button>
                            </>
                            : 
                            <></>
                        }
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>        
    )
}

export default PostsTable