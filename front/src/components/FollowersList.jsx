import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFollowersList } from "../lib/api/user";

import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";


const drawerWidth = 240;

const FollowersList = () => {
    const query = useParams();
    const [followersList, setFollowersList] = useState([])
    const handleGetFollowersList = async () => {
        try {
            const res = await getFollowersList(query.id);
            console.log(res.data);
            setFollowersList(res.data);
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        handleGetFollowersList();
    }, []);
    
    const FollowersTable = () => {
        if (followersList.length >= 1) {
            return(
                <TableContainer>
                    <h2 className="p-text">FOLLOWERS</h2>
                    <Table>
                        <TableBody>
                            {followersList.map((user, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 } }}
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
            )
        }  else {
            return (
                <h2 className="p-text">NO FOLLOWERS</h2>
            );
        }
    }
    return (
        <Box 
            component="main"
            sx={{ ml: "240px", width: `calc(100% - ${drawerWidth}px)` }}
        >
            <FollowersTable />
        </Box>
    )
        
}

export default FollowersList