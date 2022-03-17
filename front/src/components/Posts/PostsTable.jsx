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

const PostsTable = () => {

    const posts = [
        {id: 1, userId: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, userId: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    return (
        <Table>
            <TableBody>
                {posts.map((item) =>
                    <TableRow
                        key={item.id}
                        sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align={"center"}>
                            <NavLink 
                                to={`/users/${item.userId}`}
                            >   
                                <p className="c-grid__item">{item.title}</p>
                                
                            </NavLink>
                        </TableCell>
                        <TableCell>
                            <NavLink 
                                to={`/post/${item.id}`}
                            >
                                <p className="c-grid__item">{item.content}</p>
                            </NavLink>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table> 
    )
}

export default PostsTable