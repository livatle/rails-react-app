import React from "react";
import { Link } from "react-router-dom";
//material-ui
import { Divider, Table, TableBody, TableCell, TableRow } from "@mui/material";

const FollowTable = (props) => {
    const { followingData, followType } = props
    
    return (
        <>
            <h2 className="c-text">{followType}</h2>
            <Divider color="#ffffff" />
            <Table className="c-box">
                <TableBody>
                    {followingData.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 }}}
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
        </>
    )
}

export default FollowTable