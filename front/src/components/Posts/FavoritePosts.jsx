import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//api
import { getFavoritePosts } from "../../lib/api/user";
//material-ui
import { Divider, Table, TableBody, TableCell, TableRow } from "@mui/material";

const Favoriteposts = () => {
    const [favoritePosts, setFavoritePosts] = useState([])
    const query = useParams();

    const handleGetFavoritePosts = async () => {
        try {
            const res = await getFavoritePosts(query.id);
            console.log(res.data);
            setFavoritePosts(res.data);
        } catch (e) {
        console.log(e);
        }
    }

    useEffect(() => {
        handleGetFavoritePosts();
    }, []);

    if (favoritePosts.length >= 1) {
        return(
            <>
                <h2 className="c-text">FAVORITE POSTS</h2>
                <Divider color="#ffffff" />
                <Table>
                    <TableBody>
                        {JSON.parse(favoritePosts).map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ bgcolor: "#222A50", '&:last-child td, &:last-child th': { border: 0 }}}
                            >   
                                <TableCell align="center">
                                    <Link to={`/post/${item.id}`}>
                                        <p className="c-grid__item">{item.content}</p>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        )
    }  else {
        return (
            <h2 className="c-text">NO FAVORITE POST</h2>
        );
    }
}

export default Favoriteposts