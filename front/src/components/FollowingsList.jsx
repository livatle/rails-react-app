import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFollowingsList } from "../lib/api/user";

import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const FollowingsList = () => {
    const query = useParams();
    const [followingsList, setFollowingsList] = useState([])
    const handleGetFollowingsList = async () => {
        try {
            const res = await getFollowingsList(query.id);
            console.log(res.data);
            setFollowingsList(res.data);
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        handleGetFollowingsList();
    }, []);
        if (followingsList.length >= 1) {
            return (
                <TableContainer >
                    <Table>
                        <TableBody>
                            {followingsList.map((user, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                >   
                                    <TableCell align="center">
                                        <Link to={`/users/${user.id}`}>
                                            <p className="c-grid__item">{user.name}</p>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                    
            );
        } else {
            return ( 
                <h2 className="p-text">NO FOLLOWINGS</h2>
            );
        }
}

export default FollowingsList