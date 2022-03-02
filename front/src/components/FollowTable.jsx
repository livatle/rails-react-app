import React from "react";
import { Link } from "react-router-dom";

import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const FollowTable = (props) => {
    const { followingData, followType } = props
    return (
        <>
            <h2 className="p-text">{followType}</h2>
            <Table>
                <TableBody>
                    {followingData.map((user, index) => (
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
        </>
    )
}

export default FollowTable