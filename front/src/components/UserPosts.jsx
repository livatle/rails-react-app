import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import { createStyles, makeStyles } from '@mui/styles';
import { FollowInfo } from "./index";
// api
import { getUserPosts } from '../lib/api/user';
import { deletePost } from '../lib/api/post';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableBody from "@mui/material/TableBody";
import { Icon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const drawerWidth = 240;

const useStyles = makeStyles(() =>
  createStyles({
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

const UserPosts = () => {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const [dataUser, setDataUser] = useState([]);
  const query = useParams();

  const handleGetUserPosts = async () => {
    try {
        const res = await getUserPosts(query.id);
        console.log(res.data);
        setUser(res.data.user.name);
        setDataUser(res.data.posts);
    } catch (e) {
        console.log(e)
    }
  };

  useEffect(() => {
      handleGetUserPosts(query);
  }, [query]);
  
  const handleDelete = async (item) => {
      console.log('click', item.id)
      try {
      const res = await deletePost(item.id)
      console.log(res.data)
      // データを再取得
      handleGetUserPosts()
      } catch (e) {
          console.log(e)
      }   
  }
  const UserTable = () => {
      if (dataUser.length >= 1) {
        return (
            <TableContainer>
                <h2 className="p-text">{user},s POST</h2>
                <FollowInfo 
                    user={user}
                />
                <Table>
                    <TableBody>
                        {dataUser.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 } }}
                            > 
                                <TableCell align="center" sx={{width: "20%"}}>
                                    <NavLink 
                                        to={`/users/${item.userId}`}
                                    >
                                        <p className="c-grid__item">{user}</p>
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
                                <TableCell align="center" sx={{width: "20%"}}>
                                    <NavLink 
                                        to={`/edit/${item.id}`}
                                        className={classes.updateButton}
                                    >
                                        <ModeEditOutlineIcon />
                                        UPDATE
                                    </NavLink>
                                    <Button
                                        onClick={() => handleDelete(item)}
                                        className={classes.deleteButton}
                                    >
                                        <DeleteIcon />
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>           
            </TableContainer>
        );
      } else {
        return (
            <h2 className="p-text">NO POST</h2>
        );
      }
  };
  return (
    <Box 
            component="main"
            sx={{ ml: "240px", width: `calc(100% - ${drawerWidth}px)` }}
    >
        <UserTable />
    </Box>
  )
}

export default UserPosts